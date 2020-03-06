// const { cryptPassword } = require('../../../../src');

const cryptPassword = () => {}

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  );
  // Users.associate = ({ Tasks }) => {
  //   Users.hasMany(Tasks);
  // };

  // Users.beforeCreate(cryptPassword(8));
  // Users.beforeUpdate(cryptPassword(8));

  return Users;
};
