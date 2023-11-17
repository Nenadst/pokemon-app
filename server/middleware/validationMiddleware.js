const { body, validationResult } = require('express-validator');
const { BadRequestError, UnauthorizedError } = require('../errors/customErrors');
const User = require('../models/UserModel');

const withValidationErrors = (validateValues) => [
  ...validateValues,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      if (errorMessages[0].startsWith('not authorized')) {
        throw new UnauthorizedError('not authorized to access this route');
      }
      throw new BadRequestError(errorMessages);
      // return res.status(400).json({ errors: errorMessages });
    }
    return next();
  },
];

const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email').notEmpty().withMessage('email is required').isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password').notEmpty().withMessage('password is required').isLength({ min: 8 })
    .withMessage('password must be 8 characters long'),
  body('lastName').notEmpty().withMessage('last name is required'),
]);

const validateLoginInput = withValidationErrors([
  body('email').notEmpty().withMessage('email is required').isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email').notEmpty().withMessage('email is required').isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('lastName').notEmpty().withMessage('last name is required'),
]);

module.exports = {
  validateRegisterInput,
  validateLoginInput,
  validateUpdateUserInput,
};
