const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  abbreviation: { type: String, default: "TBD1" },
  category: { type: String, default: "Project" },
  status: { type: String, default: "Idea" },
  status_date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  progress: { type: Number, default: 0 },
  create_date: { type: Date, default: Date.now },
  archive: { type: Boolean, default: false }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
