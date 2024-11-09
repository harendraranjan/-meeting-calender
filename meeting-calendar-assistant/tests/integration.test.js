const request = require('supertest');
const app = require('../src/app');

describe('Calendar API Endpoints', () => {
  it('should book a meeting', async () => {
    const res = await request(app).post('/api/calendar/book').send({
      employeeId: 'employee_id_here',
      startTime: new Date(),
      endTime: new Date(Date.now() + 30 * 60 * 1000),
      participants: ['participant_id_here']
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('meetingId');
  });
});
