const Meeting = require('../models/Meeting');
const Employee = require('../models/Employee');

class CalendarService {
  async bookMeeting(employeeId, meeting) {
    const employee = await Employee.findById(employeeId).populate('calendar');
    const hasConflict = employee.calendar.meetings.some(
      m => (m.startTime <= meeting.endTime && m.endTime >= meeting.startTime)
    );

    if (!hasConflict) {
      await meeting.save();
      employee.calendar.meetings.push(meeting);
      await employee.calendar.save();
      return meeting;
    } else {
      throw new Error("Meeting conflict exists.");
    }
  }

  async findFreeSlots(emp1Id, emp2Id, duration) {
    // Logic to find free slots of specified duration between two employees' calendars
  }

  async findConflicts(meetingRequest, participantIds) {
    // Logic to find participants with meeting conflicts
  }
}

module.exports = new CalendarService();
