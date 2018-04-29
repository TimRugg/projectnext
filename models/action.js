const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionSchema = new Schema({
  action_step: { type: String, required: true },  
  rank: { type: Number, default: 0 },
  complete: { type: Boolean, default: false },
  complete_date: { type: Date, default: null },
  create_date: { type: Date, default: Date.now }
});

const Action = mongoose.model("Action", actionSchema);

module.exports = Action;