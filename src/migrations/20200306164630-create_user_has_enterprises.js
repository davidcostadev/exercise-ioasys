module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'user_has_enterprises',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        UserId: {
          field: 'user_id',
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        EnterpriseId: {
          field: 'enterprise_id',
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      },
    );

    await queryInterface.addConstraint('user_has_enterprises', ['user_id', 'enterprise_id'], {
      type: 'unique',
      name: 'unique_user_enterprise_rel',
    });

    await queryInterface.addConstraint('user_has_enterprises', ['user_id'], {
      type: 'foreign key',
      name: 'fk_user_has_enterprise',
      references: {
        table: 'users',
        field: 'id',
      },
    });

    await queryInterface.addConstraint('user_has_enterprises', ['enterprise_id'], {
      type: 'foreign key',
      name: 'fk_enterprise_in_user',
      references: {
        table: 'enterprises',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('user_has_enterprises');
  },
};
