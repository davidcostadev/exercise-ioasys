module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enterprises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TypeId: {
        field: 'type_id',
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
      sharePrice: {
        field: 'share_price',
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('enterprises', ['type_id'], {
      type: 'foreign key',
      name: 'fk_enterprise_type',
      references: {
        table: 'enterprise_types',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('enterprises');
  },
};
