const { UnauthenticatedError, UnauthorizedError } = require('../errors/customErrors');
const { verifyJWT } = require('../utils/tokenUtils');

const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    if (!token) throw new UnauthenticatedError('authentication invalid');
  }
};

const authorizePermissions = (...roles) => (req, res, next) => {
  console.log(roles);
  if (!roles.includes(req.user.role)) {
    throw new UnauthorizedError('Unauthorized to access this route');
  }
  next();
};

module.exports = { authenticateUser, authorizePermissions };
