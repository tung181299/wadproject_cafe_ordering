const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  desc: String,
});

module.exports = mongoose.model('Table', tableSchema);
