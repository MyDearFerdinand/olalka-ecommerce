const { client } = require('../config/db');

const getAllProducts = async (req, res) => {
  try {
    const products = await client.db("your_database_name").collection("products").find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error getting products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await client.db("your_database_name").collection("products").findOne({ _id: req.params.id });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error getting product' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};