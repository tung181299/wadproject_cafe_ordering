const { validationResult } = require('express-validator');

const Discount = require('../../models/discount');
const {
  errorHandler,
  createError
} = require('../../util/error-handler');

exports.createDiscount = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw createError('Validation failed D:', 422, errors.array());

    const { code, on, percent } = req.body;

    const newDiscount = new Discount({ code, on, percent });
    const createdDiscount = await newDiscount.save();

    res.status(201).json({
      message: 'Created new Discount :D',
      discount: createdDiscount
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};

exports.getDiscounts = async (req, res, next) => {
  try {
    const discounts = await Discount.find();
    res.status(200).json({
      message: 'Fetched Discounts :D',
      discounts
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};

exports.deleteDiscount = async (req, res, next) => {
  try {
    const { discountId } = req.params;
    const discount = await Discount.findById(discountId);
    if (!discount)
      throw createError('Discount not found D:', 404);

    await Discount.findByIdAndRemove(discountId);
    res.status(200).json({
      message: 'Deleted discount :D',
      discountId
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};

exports.getDiscount = async (req, res, next) => {
  try {
    const { discountId } = req.params;
    const discount = await Discount.findById(discountId);
    if (!discount)
      throw createError('Discount not found D:', 404);

    res.status(200).json({
      message: 'Fetched discount :D',
      discount
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};
