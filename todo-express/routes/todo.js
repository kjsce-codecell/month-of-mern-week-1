import express from "express";
import {
  getTodos,
  addTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.route("/get-todos").get(getTodos);
router.route("/add-todo").post(addTodo);
router.route("/delete-todo/:id").delete(deleteTodo);

// module.exports = { router };
export default router;
