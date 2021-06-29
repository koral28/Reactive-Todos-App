const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    Caption: {
      type: String,
      require: true,
    },
    Description: {
      type: String,
      require: true,
    },
    Icon: {
      type: String,
      require: true,
    },
    Color: {
      type: String,
      require: true,
    },
    Items: [{}],
  }
  //   { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
