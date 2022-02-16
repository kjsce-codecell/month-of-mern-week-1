import { todos } from "../models/Todo.js";
import asyncHandler from "express-async-handler";
import { validateTodo } from "../validations/validation.js";


// @desc   Get all todos
// @route  GET /get-todos
// @access Public
exports.getTodos = asyncHandler(async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

// @desc   Add a todo
// @route  POST /add-todo
// @access Public
exports.addTodo = asyncHandler(async (req, res) => {
  const { todo } = req.body;
  await validateTodo.validateAsync(todo);
  try {
    const { todo } = req.body;
    const expense = new ExpenseDoc({
      todo,
    });
    await expense.save();
    console.log({ todo }, "added to mongoDB");
  } catch (err) {
    console.log(err);
  }
});

// @desc   Delete a todo
// @route  DELETE /delete-todo/:id
// @access Public
exports.deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  try {
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    await todo.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});
