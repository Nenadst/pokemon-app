const jwt = require('jsonwebtoken');

const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_IN_MINUTES,
  });
  return token;
};

const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = { createJWT, verifyJWT };
