const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true },
    description: { type: String, required: true },
    badge:       { type: String, default: "Project" },
    stack:       { type: [String], default: [] },
    github:      { type: String, default: "" },
    demo:        { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
