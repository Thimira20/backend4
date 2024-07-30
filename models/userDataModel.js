// models/userDataModel.js
const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  data: { type: String, required: true },
});

module.exports = mongoose.model("UserData", userDataSchema);
