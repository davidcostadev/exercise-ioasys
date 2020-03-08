// const Users = require('./Users');
// const Enterprises = require('./Enterprises');

module.exports = (sequelize, DataTypes) => {
  const UserHasEnterprises = sequelize.define(
    'UserHasEnterprises',
    {
      UserId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        // references: {
        //   model: Users,
        //   key: 'id',
        // },
        allowNull: false,
      },
      EnterpriseId: {
        field: 'enterprise_id',
        type: DataTypes.INTEGER,
        // references: {
        //   model: Enterprises,
        //   key: 'id',
        // },
        allowNull: false,
      },
    },
    {
      tableName: 'user_has_enterprises',
      timestamps: false,
      // underscored: false,
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
