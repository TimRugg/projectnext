const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, default: "Project" },
  start_date: { type: Date, default: Date.now },
  status: { type: String, default: "Idea" },
  status_date: { type: Date, default: Date.now },
  progress: { type: Number, default: 0},
  active: { type: Boolean, default: true },
  actions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Action"
    }
  ]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
