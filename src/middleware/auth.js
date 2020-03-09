const jwt = require('jsonwebtoken');

const getToken = (req, res) => {
  const { headers } = req;
  if (typeof headers['access-token'] !== 'undefined' && typeof headers.client !== 'undefined') {
    const [first, last] = headers['access-token'].split('.');

    res.set('access-token', headers['access-token']).set('client', headers.client);

    return [first, headers.client, last].join('.');
  }

  return null;
};

const checkAuth = (req, res, next) => {
  const token = getToken(req, res);
  if (!token) {
    res.status(403).send({
      message: 'No token provided',
    });
  } else {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(500).send({
          message: 'Invalid auth token provided.',
        });
      } else {
        res.user = decoded;

        next();
      }
    });
  }
};

module.exports = checkAuth;
