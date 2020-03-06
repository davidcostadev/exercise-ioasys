module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
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
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        balance: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        photo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        first_access: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        super_angel: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        password: {
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
    return queryInterface.dropTable('users');
  },
};
