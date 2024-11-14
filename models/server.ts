import mongoose from "mongoose"

const serverSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    // unique: true,
  },
  countryImage: {
    type: String,
    required: true,
  },
});

export const Server = mongoose.model("Server", serverSchema);
// module.exports = User;