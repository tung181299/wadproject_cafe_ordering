const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  phoneNumbers: [String],
  shipAddresses: [{
    placeId: {
      type: String,
      required: true
    },
    address1: {
      type: String,
      required: true
    },
    address2: String,
    ward: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }],
  creditCards: [{
    ownerName: {
      type: String,
      required: true
    },
    cardNumber: {
      type: String,
      required: true
    },
    pinNumber: {
      type: String,
      required: true
    },
    expireTime: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('Account', accountSchema);
