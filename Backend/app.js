const express = require('express');
require('dotenv').config();
const connectToDb = require('./db/db');
const Routes = require('./routes/index');

const app = express();

// Middleware, routes, etc.
app.use(express.json());

connectToDb();

app.use('/', Routes);

module.exports = app;
