const mongoose = require("mongoose");

const thumbnailSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  videoName: { type: String, reqquired: true },
  version: { type: String, required: true },
  image: { type: String, required: true },
  paid: { type: String, required: true },
});
module.exports = mongoose.model("Thumbnail", thumbnailSchema);
