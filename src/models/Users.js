const bcrypt = require('bcrypt');

const BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT, 10) || 8;

const cryptPassword = (bcryptSalt = BCRYPT_SALT) => user => {
  // eslint-disable-next-line no-underscore-dangle
  if (user.password !== user._previousDataValues.password) {
    return bcrypt.hash(user.password, bcrypt.genSaltSync(bcryptSalt)).then(hash => {
      // eslint-disable-next-line no-param-reassign
      user.password = hash;
    });
  }

  return null;
};

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstAccess: {
        field: 'first_access',
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      superAngel: {
        field: 'super_angel',
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      password: {
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
      tableName: 'users',
      underscored: true,
    },
  );
  Users.associate = ({ Enterprises, UserHasEnterprises }) => {
    Users.belongsToMany(Enterprises, {
      through: 'UserHasEnterprises',
      as: 'enterprises',
      foreignKey: 'UserId',
    });
    Users.hasMany(UserHasEnterprises, {
      as: 'portfolio',
      foreignKey: 'user_id',
    });
  };

  Users.beforeCreate(cryptPassword());
  Users.beforeUpdate(cryptPassword());

  return Users;
};
