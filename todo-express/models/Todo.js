import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todo: {
    type: String,
    default: "Untitled",
  },
});

module.exports = mongoose.model("Todo", todoSchema, todos);
