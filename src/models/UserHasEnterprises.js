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

  UserHasEnterprises.associate = ({ Enterprises, Users }) => {
    UserHasEnterprises.belongsTo(Enterprises, {
      foreignKey: 'id',
      sourceKey: 'enterprise_id',
      as: 'enterprises',
    });
    // UserHasEnterprises.belongsTo(Users, {
    //   foreignKey: 'user_id',
    //   sourceKey: 'user_id',
    //   // as: 'users',
    // });
    //   UserHasEnterprises.hasOne(Users, {
    //     foreignKey: 'id',
    //     sourceKey: 'user_id',
    //   });
    // console.log(UserHasEnterprises);
    // UserHasEnterprises.hasOne(Users, {
    //   as: 'users',
    // });
  };

  // UserHasEnterprises.beforeCreate(data => {
  //   console.log('beforeCreate', data.dataValues);
  // });

  return UserHasEnterprises;
};
