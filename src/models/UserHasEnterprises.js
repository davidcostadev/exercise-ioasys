module.exports = (sequelize, DataTypes) => {
  const UserHasEnterprises = sequelize.define(
    'UserHasEnterprises',
    {
      UserId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      EnterpriseId: {
        field: 'enterprise_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'user_has_enterprises',
      timestamps: false,
    },
  );

  UserHasEnterprises.associate = ({ Enterprises }) => {
    UserHasEnterprises.belongsTo(Enterprises, {
      foreignKey: 'id',
      sourceKey: 'enterprise_id',
      as: 'enterprises',
    });
  };

  return UserHasEnterprises;
};
