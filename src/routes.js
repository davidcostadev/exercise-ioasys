const { Router } = require('express');
const Auth = require('./controllers/Auth.controller');
const Enterprises = require('./controllers/Enterprises.controller');

const router = Router();

const apiVersion = 'v1';

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

router.get(`/api/${apiVersion}/users/auth/sign_in`, getUser, errorHandler(Auth.signIn));
router.get(`/api/${apiVersion}/enterprises/:id`, errorHandler(Enterprises.show));
router.get(`/api/${apiVersion}/enterprises`, errorHandler(Enterprises.list));

module.exports = router;
