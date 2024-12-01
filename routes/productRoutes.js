const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createProduct);
router.get('/', authMiddleware, getProducts);

module.exports = router;
