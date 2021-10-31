const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    dayAndTime: {
      type: String,
      required: true,
    },
    reminder: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
