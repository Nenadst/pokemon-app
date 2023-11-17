const cors = require('cors');

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split`,`
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) { // for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
};

module.exports = cors(corsOptions);
