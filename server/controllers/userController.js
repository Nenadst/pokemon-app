const { StatusCodes } = require('http-status-codes');
const User = require('../models/UserModel');

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  //   const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: 'update user' });
};

module.exports = { getCurrentUser, updateUser };
