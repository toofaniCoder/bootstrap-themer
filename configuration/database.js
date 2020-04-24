const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://subroto:qwertyuiop@cluster0-m86si.mongodb.net/bootstrapthemer?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database is successfully connected...");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDatabase;
