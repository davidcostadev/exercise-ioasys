module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      enterprise_types: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  );

  return Users;
};
