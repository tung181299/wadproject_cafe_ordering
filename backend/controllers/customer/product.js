const Product = require('../../models/product');
const {
  errorHandler,
  createError
} = require('../../util/error-handler');

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: 'Fetched products :D',
      products
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};