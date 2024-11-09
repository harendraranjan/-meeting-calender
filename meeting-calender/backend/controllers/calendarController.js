const CalendarService = require('../services/calendarService');
const Meeting = require('../models/Meeting');

exports.bookMeeting = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { startTime, endTime, participants } = req.body;
    const meeting = new Meeting({ startTime, endTime, participants });
    const savedMeeting = await CalendarService.bookMeeting(employeeId, meeting);
    res.status(200).json(savedMeeting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFreeSlots = async (req, res) => {
  const { emp1Id, emp2Id, duration } = req.query;
  const freeSlots = await CalendarService.findFreeSlots(emp1Id, emp2Id, duration);
  res.status(200).json(freeSlots);
};

exports.checkConflicts = async (req, res) => {
  const { participants } = req.body;
  const meetingRequest = req.body.meeting;
  const conflicts = await CalendarService.findConflicts(meetingRequest, participants);
  res.status(200).json(conflicts);
};
