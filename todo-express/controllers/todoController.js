import { Todo } from "../models/Todo.js";
import asyncHandler from "express-async-handler";
import { validateTodo } from "../validations/validation.js";

// @desc   Get all todos
// @route  GET /get-todos
// @access Public
export const getTodos = asyncHandler(async (req, res) => {
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
export const addTodo = asyncHandler(async (req, res) => {
  const { todo } = req.body;
  await validateTodo.validateAsync(todo);
  try {
    const { todo } = req.body;
    const expense = new Todo({
      todo,
    });
    await expense.save();
    console.log({ todo }, "added to mongoDB");
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Could not add todo",
    });
  }
});

// @desc   Delete a todo
// @route  DELETE /delete-todo/:id
// @access Public
export const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  try {
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "No Todo found",
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
