const { validationResult } = require('express-validator');

const Product = require('../../models/product');
const {
  errorHandler,
  createError
} = require('../../util/error-handler');

// TODO add image
exports.createProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw createError('Validation failed D:', 422, errors.array());

    const { name, price, desc, isMustTry, sizes, toppings } = req.body;

    const newProduct = new Product({
      name,
      price,
      desc,
      isMustTry,
      sizes: sizes && sizes,
      toppings: toppings && toppings
    });
    const createdProduct = await newProduct.save();

    res.status(201).json({
      message: 'Created new product :D',
      product: createdProduct
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw createError('Validation failed D:', 422, errors.array());

    const { productId, name, price, desc, isMustTry, sizes, toppings } = req.body;
    const product = await Product.findById(productId);
    if (!product)
      throw createError('Product not found D:', 404);

    product.name = name;
    product.price = price;
    product.desc = desc;
    product.isMustTry = isMustTry;
    product.sizes = sizes && sizes;
    product.toppings = toppings && toppings;
    await product.save();

    res.status(201).json({
      message: 'Updated product :D',
      product
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};