const { StatusCodes } = require('http-status-codes');
const User = require('../models/UserModel');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const { UnauthenticatedError } = require('../errors/customErrors');
const { createJWT } = require('../utils/tokenUtils');

const register = async (req, res) => {
  const isFirstAccount = await User.countDocuments() === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthenticatedError('invalid credentials');
  const isPasswordCorrect = await comparePassword(req.body.password, user.password);
  if (!isPasswordCorrect) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });

  res.cookie('userData', JSON.stringify({
    _id: user._id,
    fullName: `${user.name} ${user.lastName}`,
    email: user.email,
    phoneNumber: user.phoneNumber,
    userInfo: user.userInfo,
    role: user.role,
  }), {
    httpOnly: false,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};

const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.cookie('userData', 'logout', {
    httpOnly: false,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

module.exports = { register, login, logout };
