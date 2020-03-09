const { Op } = require('sequelize');
const { Enterprises, EnterpriseTypes } = require('../database');

const show = async ({ enterpriseId }) => {
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
      'own_enterprise',
      'shares',
      'own_shares',
    ],
    include: [
      {
        model: EnterpriseTypes,
        attributes: ['id', ['name', 'enterprise_type_name']],
        as: 'enterprise_type',
      },
    ],
  });

  return { enterprise };
};

const list = async ({ query = {} }) => {
  const where = {};

  if (query.enterprise_types) {
    where.TypeId = query.enterprise_types;
  }

  if (query.name) {
    where.name = {
      [Op.iLike]: `%${query.name}%`,
    };
  }

  const enterprises = await Enterprises.findAll({
    where,
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
      'own_enterprise',
    ],
    include: [
      {
        model: EnterpriseTypes,
        attributes: ['id', ['name', 'enterprise_type_name']],
        as: 'enterprise_type',
      },
    ],
  });

  return { enterprises };
};

module.exports = {
  show,
  list,
};
