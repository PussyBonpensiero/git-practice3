const express = require('express');
const users = require('../mock/dataUsers');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;
