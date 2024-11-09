const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Hardcoded MongoDB URI and Port
const MONGO_URI = 'mongodb://localhost:27017/calendar-assistant';
const PORT = 5000;

// Database Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Rest of your application code here
