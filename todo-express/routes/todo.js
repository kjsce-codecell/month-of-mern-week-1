import express from "express";
const router = express.Router();
import { getTodos, addTodo, deleteTodo } from "../controllers/todoController.js";

router.route("/get-todos").get(getTodos);
router.route("/add-todo").post(addTodo);
router.route("/delete-todo/:id").delete(deleteTodo);

module.exports = { router };
