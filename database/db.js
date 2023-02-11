const mongoose = require("mongoose");

const MONGO_URL = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://computerRepairUser:computerrepair@cluster0.taqt5.mongodb.net/computerRepair?retryWrites=true&w=majority`,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = MONGO_URL;
