const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    require: false,
    default: 0
  },

});

module.exports = mongoose.model("Item", ItemSchema);
