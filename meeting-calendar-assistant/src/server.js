const mongoose = require('mongoose');
const app = require('./app'); // Ensure this path is correct

const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/meeting_calendar';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
