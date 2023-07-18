const mongoose = require('mongoose');

const dbUri = process.env.MONGO_DB_URI

async function connectDB() {
  try {
    await mongoose.connect(dbUri)

    console.info('Connected to MongoDB')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB;
