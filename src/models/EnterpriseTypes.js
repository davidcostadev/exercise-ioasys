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

  return EnterpriseTypes;
};
