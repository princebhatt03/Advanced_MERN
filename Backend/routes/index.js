const express = require('express');
const router = express.Router();
const mongoose = require('../db/db');
const User = require('../models/user.model');

router.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = router;
