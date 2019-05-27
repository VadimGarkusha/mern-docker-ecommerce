import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import colors from 'colors';
import connectDb from './db';
import router from './routes/index';

const app = express(); 
const port = process.env.PORT || 9000;
connectDb();
console.log(`Running in ${process.env.NODE_ENV}`.green);

// view engine setup

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('', router);

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`.green);
});

module.exports = app;
