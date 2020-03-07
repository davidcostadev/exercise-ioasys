const { Router } = require('express');
const Auth = require('./controllers/Auth.controller');
const Enterprises = require('./controllers/Enterprises.controller');

const router = Router();

const apiVersion = 'v1';

const getUser = (req, res, next) => {
  req.userId = 1;

  next();
};

router.get('/', (req, res) => res.send('OK'));

router.get(`/api/${apiVersion}/users/auth/sign_in`, getUser, Auth.signIn);
router.get(`/api/${apiVersion}/enterprises/:id`, Enterprises.show);

module.exports = router;
