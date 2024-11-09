const mongoose = require('mongoose');
const MeetingSchema = require('./Meeting').schema;

const CalendarSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  meetings: [MeetingSchema],
});

module.exports = mongoose.model('Calendar', CalendarSchema);
