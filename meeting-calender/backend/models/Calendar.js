const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  meetings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meeting' }]
});

module.exports = mongoose.model('Calendar', calendarSchema);

