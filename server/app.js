const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Pool } = require('pg');
const connectionString = 'postgres://bdewvnazghaqsm:929f434a9513430580257674b3162c0efa5e10a143eb9a64fa97baf3885e3e95@ec2-50-19-210-145.compute-1.amazonaws.com:5432/d9j35ma9cv42t5';
const pool = new Pool({connectionString, ssl: {
  rejectUnauthorized: false},});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
