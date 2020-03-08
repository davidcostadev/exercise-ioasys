const omit = require('lodash.omit');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Users, UserHasEnterprises, Enterprises, EnterpriseTypes } = require('../database');

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({
    where: {
      email,
    },
    include: [
      {
        model: UserHasEnterprises,
        as: 'portfolio',
        include: [
          {
            model: Enterprises,
            attributes: ['id', ['name', 'enterprise_name'], 'sharePrice'],
            as: 'enterprises',
            include: [
              {
                model: EnterpriseTypes,
                attributes: ['id', ['name', 'enterprise_type_name']],
                as: 'enterprise_type',
              },
            ],
          },
        ],
      },
    ],
    attributes: [
      'id',
      ['name', 'investor_name'],
      'email',
      'city',
      'country',
      'balance',
      'photo',
      'first_access',
      'super_angel',
      'password',
    ],
  });

  if (!user) {
    throw new Error('Authentication failed. User not found.');
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new Error('Authentication failed. Wrong password.');
  }
  const uid = user.email;
  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
  const parts = token.split('.');
  const client = parts.splice(1, 1);
  const accessToken = parts.join('.');

  return res
    .set('access-token', accessToken)
    .set('client', client)
    .set('uid', uid)
    .json({
      investor: {
        ...omit(user.toJSON(), ['password']),
        portfolio_value: user.portfolio.reduce((acc, cur) => acc + cur.enterprises.sharePrice, 0),
        portfolio: {
          enterprises: user.portfolio.map(it =>
            omit(
              {
                ...it.enterprises.toJSON(),
              },
              ['sharePrice'],
            ),
          ),
          enterprises_number: user.portfolio.length,
        },
      },
      enterprise: null,
      success: true,
    });
};

module.exports = {
  signIn,
};
