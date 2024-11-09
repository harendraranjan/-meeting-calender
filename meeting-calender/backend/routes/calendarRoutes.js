const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.post('/book/:employeeId', calendarController.bookMeeting);
router.get('/free-slots', calendarController.getFreeSlots);
router.post('/check-conflicts', calendarController.checkConflicts);

module.exports = router;

