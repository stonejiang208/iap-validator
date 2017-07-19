const validate = require('./validate7.js');
const express = require('express');

const router = express.Router();

router.post('/:bundle/:product_id', (req, res) => {
  const opt = {};
  if (req.query.hasOwnProperty('get_latest_receipt') && req.query.get_latest_receipt !== "false") {
  	opt.get_latest_receipt = true;
  }
  // Set up response.
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Validate.
  validate(req.params.bundle, req.body.receipt, req.params.product_id, (result) => {
    // Write response.
    res.end(result);
  }, opt);
});

module.exports = router;
