const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getAllProducts,
  getProductById
} = require('../controllers/products');

// Routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;