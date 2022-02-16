import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todo: {
    type: String,
    default: "Untitled",
  },
});

export default mongoose.model("Todo", todoSchema, todos);
