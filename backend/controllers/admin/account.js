const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const Account = require('../../models/account');
const {
  errorHandler,
  createError
} = require('../../util/error-handler');

exports.createAdminAccount = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw createError('Validation failed D:', 422, errors.array());

    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const account = new Account({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      isAdmin: true,
      phoneNumbers: [],
      shipAddresses: [],
      creditCards: []
    });
    const createdAcc = await account.save();

    res.status(201).json({
      message: 'Account created successfully :D',
      userId: createdAcc._id,
      isAdmin: true
    });
  } catch (error) {
    errorHandler(req, error, next);
  }
};