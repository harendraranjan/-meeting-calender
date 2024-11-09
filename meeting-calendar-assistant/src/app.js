const express = require('express');
const calendarRoutes = require('./routes/calendarRoutes'); // Ensure this path is correct
const errorHandler = require('./utils/errorHandler'); // Ensure this path is correct
require('dotenv').config(); // Make sure this is at the top if using environment variables

const app = express();
app.use(express.json());

// API route for calendar
app.use('/api/calendar', calendarRoutes);

// Custom error handling middleware
app.use(errorHandler);

module.exports = app;
