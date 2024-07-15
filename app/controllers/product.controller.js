const { getProduct } = require('../services/product.service');

/**
 * Function to get all products
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getProductController = async (req, res) => {
  try {
    const products = await getProduct(req, res);
    return res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProductController };
