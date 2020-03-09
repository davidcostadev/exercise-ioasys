const { Router } = require('express');
const Auth = require('./controllers/Auth.controller');
const Enterprises = require('./controllers/Enterprises.controller');
const authMiddleware = require('./middleware/auth');

const router = Router();

const apiVersion = process.env.API_VERSION;

router.get('/', (req, res) => res.send('OK'));

router.post(`/api/${apiVersion}/users/auth/sign_in`, Auth.signIn);
router.get(`/api/${apiVersion}/enterprises/:id`, authMiddleware, Enterprises.show);
router.get(`/api/${apiVersion}/enterprises`, authMiddleware, Enterprises.list);

module.exports = router;
