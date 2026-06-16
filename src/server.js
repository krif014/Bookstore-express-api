const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bookstore';

connectDB(MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log('Bookstore API is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  });
