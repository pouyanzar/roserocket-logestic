const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Pool } = require('pg');
require('dotenv').config();
const connectionString = process.env.DATABASE_URL;
const db = new Pool({connectionString, ssl: {
  rejectUnauthorized: false},});

const indexRouter = require('./routes/index');
const driversRouter = require('./routes/drivers');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/drivers', driversRouter(db));

module.exports = app;
