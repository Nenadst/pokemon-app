const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
    };
  }
}

module.exports = BadRequestError;
