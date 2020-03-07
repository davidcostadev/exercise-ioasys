module.exports = (sequelize, DataTypes) => {
  const Enterprises = sequelize.define(
    'Enterprises',
    {
      TypeId: {
        field: 'type_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      facebook: {
        type: DataTypes.STRING,
      },
      twitter: {
        type: DataTypes.STRING,
      },
      linkedin: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      photo: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      sharePrice: {
        field: 'share_price',
        type: DataTypes.DOUBLE,
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
      tableName: 'enterprises',
      // underscored: true,
    },
  );

  Enterprises.associate = ({ Users, EnterpriseTypes }) => {
    // Enterprises.belongsToMany(Users, {
    //   through: 'UserHasEnterprises',
    //   as: 'users',
    //   foreignKey: 'enterprise_id',
    //   sourceKey: 'id',
    // });
    Enterprises.belongsTo(EnterpriseTypes, {
      foreignKey: 'type_id',
      as: 'enterprise_type',
      // sourceKey: 'type_id',
    });
    // Enterprises.hasMany(UserHasEnterprises, {
    //   as: 'enterprises',
    //   foreignKey: 'enterprises_id',
    // });
  };

  return Enterprises;
};
