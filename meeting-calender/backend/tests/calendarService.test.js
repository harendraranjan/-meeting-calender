const CalendarService = require('../services/calendarService');
const Meeting = require('../models/Meeting');
const Employee = require('../models/Employee');

test('Book a meeting successfully', async () => {
  const employeeId = "someEmployeeId";
  const meeting = new Meeting({
    startTime: new Date("2024-11-10T10:00:00"),
    endTime: new Date("2024-11-10T10:30:00")
  });

  const savedMeeting = await CalendarService.bookMeeting(employeeId, meeting);
  expect(savedMeeting).toBeDefined();
  expect(savedMeeting.startTime).toEqual(meeting.startTime);
});

