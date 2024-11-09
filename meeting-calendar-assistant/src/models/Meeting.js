const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  duration: Number, // in minutes
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

module.exports = mongoose.model('Meeting', MeetingSchema);
