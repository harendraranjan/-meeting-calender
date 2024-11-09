const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.post('/book', calendarController.bookMeeting);
router.get('/:employeeId1/:employeeId2/free-slots', calendarController.getFreeSlots);
router.post('/meeting/conflicts', calendarController.checkConflicts);

module.exports = router;
