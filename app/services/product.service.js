const products = require('../utils/data');

/**
 * Function to get all products
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getProduct = async (req, res) => {
  return products;
};

module.exports = { getProduct };
