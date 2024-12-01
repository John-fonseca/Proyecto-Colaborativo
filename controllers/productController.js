const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price, createdBy: req.user.id });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ createdBy: req.user.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createProduct, getProducts };
