const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To MongoDb Database `.bgMagenta.white);
  } catch (error) {
    console.log(`MongoDb DataBase Connection Error`.bgRed.white);
  }
};

module.exports = connectDb;
