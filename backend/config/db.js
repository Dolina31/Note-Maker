const mongoose = require("mongoose");

const connectDB = async function connectDB() {
  try {
    mongoose.set("strictQuery", false);

    mongoose
      .connect(process.env.MONGO_URI)
      .then((result) => console.log("Mongo connecté"));
  } catch (err) {
    console.error(err);
    process.exit;
  }
};

module.exports = connectDB;
