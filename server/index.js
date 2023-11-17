require('express-async-errors');
const express = require('express');

const app = express();
require('dotenv').config();
const morgan = require('morgan');

const cookieParser = require('cookie-parser');

const path = require('path');
const cors = require('./middleware/corsHandlerMiddleware');
const connectToMongo = require('./config/db');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');

const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const { authenticateUser } = require('./middleware/authMiddleware');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './public')));

(async function start() {
  try {
    await connectToMongo();
    // eslint-disable-next-line
    console.log('Successfully connected to Mongo!');
  } catch (error) {
    // eslint-disable-next-line
    console.error('Failed to connect to Mongo:', error);
  }
}());

app.use(cookieParser());
app.use(express.json());

app.use(cors);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/api/users', authenticateUser, userRouter);
app.use('/api/auth', authRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on PORT ${port}`);
});
