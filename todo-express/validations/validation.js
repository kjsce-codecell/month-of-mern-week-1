import Joi from "joi";

export const validateTodo = Joi.object({
  todo: Joi.string().required(),
});
