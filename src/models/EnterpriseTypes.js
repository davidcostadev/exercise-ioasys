module.exports = (sequelize, DataTypes) => {
  const EnterpriseTypes = sequelize.define(
    'EnterpriseTypes',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'enterprise_types',
      underscored: true,
    },
  );

  EnterpriseTypes.associate = ({ Enterprises }) => {
    // EnterpriseTypes.hasMany(Enterprises, {
    //   foreignKey: 'type_id',
    // });
    // Enterprises.hasMany(UserHasEnterprises, {
    //   as: 'enterprises',
    //   foreignKey: 'enterprises_id',
    // });
  };

  return EnterpriseTypes;
};
