require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.MONGODB_URI ,
  jwtSecret: process.env.JWT_SECRET || '',
  environment: process.env.NODE_ENV || '',
};
