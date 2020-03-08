const { Op } = require('sequelize');
const { Enterprises, EnterpriseTypes } = require('../database');

const show = async (req, res) => {
  const enterpriseId = req.params.id;

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
  res.json({
    enterprise,
    success: true,
  });
};

const list = async (req, res) => {
  const where = {};

  if (req.query.enterprise_types) {
    where.TypeId = req.query.enterprise_types;
  }

  if (req.query.name) {
    where.name = {
      [Op.iLike]: `%${req.query.name}%`,
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

  res.json({ enterprises });
};

module.exports = {
  show,
  list,
};
