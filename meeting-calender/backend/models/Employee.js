const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  calendar: { type: mongoose.Schema.Types.ObjectId, ref: 'Calendar' }
});

module.exports = mongoose.model('Employee', employeeSchema);
