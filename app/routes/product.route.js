const express = require('express');
const { getProductController } = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getProductController);

module.exports = router;
