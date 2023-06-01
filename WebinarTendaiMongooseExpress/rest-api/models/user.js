let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
});

// the next step is to buid a model based on the schema
module.exports = mongoose.model("User", userSchema);
