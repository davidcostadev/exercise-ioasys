const { controllerCreator } = require('../libs/controllerCreator');
const service = require('../services/Enterprises.service');

const show = async (req, res) => {
  const enterpriseId = req.params.id;

  const { enterprise } = await service.show({ enterpriseId });

  res.json({
    enterprise,
    success: true,
  });
};

const list = async (req, res) => {
  const { enterprises } = await service.list({ query: req.query });

  res.json({ enterprises });
};

module.exports = {
  show: controllerCreator(show),
  list: controllerCreator(list),
};
