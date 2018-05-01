const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailyActionsSchema = new Schema({
  current_date: Date,
  current_date_complete: { type:Boolean, default:false },
  current_trend: Number,
  longest_trend: Number,
  project_1: String,
  action_1: String,
  complete_1: { type:Boolean, default:false },
  project_2: String,
  action_2: String,
  complete_2: { type:Boolean, default:false },
  project_3: String,
  action_3: String,
  complete_3: { type:Boolean, default:false }
});

const DailyActions = mongoose.model("DailyActions", dailyActionsSchema);

module.exports = DailyActions;
