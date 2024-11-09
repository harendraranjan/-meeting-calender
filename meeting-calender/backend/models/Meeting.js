const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

module.exports = mongoose.model('Meeting', meetingSchema);
