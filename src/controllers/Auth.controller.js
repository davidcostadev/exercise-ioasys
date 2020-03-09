const { controllerCreator } = require('../libs/controllerCreator');
const service = require('../services/Auth.service');

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const { accessToken, client, uid, investor, enterprise } = await service.signIn({
    email,
    password,
  });

  return res
    .set('access-token', accessToken)
    .set('client', client)
    .set('uid', uid)
    .json({
      investor,
      enterprise,
      success: true,
    });
};

module.exports = {
  signIn: controllerCreator(signIn),
};
