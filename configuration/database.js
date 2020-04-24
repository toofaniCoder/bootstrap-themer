const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("YOUR_MONGO_DB_URL", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database is successfully connected...");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDatabase;
