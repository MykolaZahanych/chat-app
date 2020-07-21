const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('server start and running');
});

module.exports = router;
