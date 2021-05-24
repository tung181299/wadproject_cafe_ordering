const { validationResult } = require('express-validator');

const Table = require('../../models/table');
const {
  errorHandler,
  createError
} = require('../../util/error-handler');

exports.createTable = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw createError('Validation failed D:', 422, errors.array());

    const { code, desc } = req.body;

    const newTable = new Table({ code, desc });
    const createdTable = await newTable.save();

    res.status(201).json({
      message: 'Created new Table :D',
      table: createdTable
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};

exports.getTables = async (req, res, next) => {
  try {
    const tables = await Table.find();
    res.status(200).json({
      message: 'Fetched Tables :D',
      tables
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};

exports.deleteTable = async (req, res, next) => {
  try {
    const { tableId } = req.params;
    const table = await Table.findById(tableId);
    if (!table)
      throw createError('Table not found D:', 404);

    await Table.findByIdAndRemove(tableId);
    res.status(200).json({
      message: 'Deleted Table :D',
      tableId
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};

exports.getTable = async (req, res, next) => {
  try {
    const { tableId } = req.params;
    const table = await Table.findById(tableId);
    if (!table)
      throw createError('Table not found D:', 404);

    res.status(200).json({
      message: 'Fetched table :D',
      table
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};
