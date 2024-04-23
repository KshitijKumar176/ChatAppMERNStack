const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connection to MongoDB successful");
  } catch (error) {
    console.log("Err connecting to mongoDB", error.message);
  }
};

module.exports = connectMongoDB;
