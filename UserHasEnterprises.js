module.exports = (sequelize, DataTypes) => {
  const UserHasEnterprises = sequelize.define(
    'UserHasEnterprises',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      enterprises_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'user_has_enterprises',
    },
  );

  UserHasEnterprises.associate = ({ User, Enterprises }) => {
    UserHasEnterprises.belongsTo(User, {
      foreignKey: 'user_id',
    });
    UserHasEnterprises.belongsTo(Enterprises, {
      foreignKey: 'enterprises_id',
    });
  };

  return UserHasEnterprises;
};
