// const omit = require('lodash.omit');
const { Enterprises } = require('../database');
// const { Users, UserHasEnterprises, Enterprises, EnterpriseTypes } = require('../database');

const show = async (req, res) => {
  const enterpriseId = req.params.id;
  console.log({ enterpriseId });

  const enterprise = await Enterprises.findByPk(enterpriseId, {
    attributes: [
      'id',
      ['email', 'email_enterprise'],
      ['name', 'enterprise_name'],
      'description',
      'facebook',
      'linkedin',
      'phone',
      'photo',
      'twitter',
      'value',
      'share_price',
      'city',
      'country',
    ],
  });
  res.json({
    enterprise,
    success: true,
  });
  // const user = await Users.findOne({
  //   where: {
  //     id: req.userID,
  //   },
  //   include: [
  //     {
  //       model: UserHasEnterprises,
  //       as: 'portfolio',
  //       include: [
  //         {
  //           model: Enterprises,
  //           attributes: ['id', ['name', 'enterprise_name'], 'sharePrice'],
  //           as: 'enterprises',
  //           include: [
  //             {
  //               model: EnterpriseTypes,
  //               attributes: ['id', ['name', 'enterprise_type_name']],
  //               as: 'enterprise_type',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   attributes: [
  //     'id',
  //     ['name', 'investor_name'],
  //     'email',
  //     'city',
  //     'country',
  //     'balance',
  //     'photo',
  //     'first_access',
  //     'super_angel',
  //   ],
  // });
  // return res.json({
  //   investor: {
  //     ...user.toJSON(),
  //     portfolio_value: user.portfolio.reduce((acc, cur) => acc + cur.enterprises.sharePrice, 0),
  //     portfolio: {
  //       enterprises: user.portfolio.map(it =>
  //         omit(
  //           {
  //             ...it.enterprises.toJSON(),
  //           },
  //           ['sharePrice'],
  //         ),
  //       ),
  //       enterprises_number: user.portfolio.length,
  //     },
  //   },
  //   enterprise: null,
  //   success: true,
  // });
};

module.exports = {
  show,
};
