module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'enterprise_types',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
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
  },

  down: queryInterface => {
    return queryInterface.dropTable('enterprise_types');
  },
};
