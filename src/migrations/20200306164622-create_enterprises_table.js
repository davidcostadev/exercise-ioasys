module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'enterprises',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        type_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        facebook: {
          type: Sequelize.STRING,
        },
        twitter: {
          type: Sequelize.STRING,
        },
        linkedin: {
          type: Sequelize.STRING,
        },
        phone: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.TEXT,
        },
        photo: {
          type: Sequelize.STRING,
        },
        value: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        share_price: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
      },
    );

    await queryInterface.addConstraint('enterprises', ['type_id'], {
      type: 'foreign key',
      name: 'fk_enterprise_type',
      references: {
        table: 'enterprise_types',
        field: 'id',
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('enterprises');
  },
};
