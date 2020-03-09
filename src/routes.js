const { Router } = require('express');
const Auth = require('./controllers/Auth.controller');
const Enterprises = require('./controllers/Enterprises.controller');
const authMiddleware = require('./middleware/auth');

const router = Router();

const apiVersion = process.env.API_VERSION;

const getUser = (req, res, next) => {
  req.userId = 1;

  next();
};

const errorHandler = controller => async (req, res) => {
  try {
    await controller(req, res);
  } catch (error) {
    const response = {
      error: error.message,
    };

    if (process.env.NODE_ENV !== 'production') {
      response.track = error;
    }

    res.status(500).json(response);
  }
};

router.get('/', (req, res) => res.send('OK'));

router.post(`/api/${apiVersion}/users/auth/sign_in`, getUser, errorHandler(Auth.signIn));
router.get(`/api/${apiVersion}/enterprises/:id`, authMiddleware, errorHandler(Enterprises.show));
router.get(`/api/${apiVersion}/enterprises`, authMiddleware, errorHandler(Enterprises.list));

module.exports = router;
