const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db');
const Routes = require('./routes/index');

const app = express();

// Middleware, routes, etc.
app.use(express.json());

connectDB();

app.use('/', Routes);

module.exports = app;
