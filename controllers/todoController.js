const Todo = require('../models/todo');
const todo_create_getAll = (req, res) => {
  Todo.find()
    .sort({ createdAt: -1 })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const todo_create_post = (req, res) => {
  console.log(req.body);
  const todo = new Todo(req.body);

  todo
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const todo_update = (req, res) => {
  const id = req.params.todoId;
  Todo.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const todo_delete = (req, res) => {
  const id = req.params.todoId;
  Todo.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  todo_create_getAll,
  todo_create_post,
  todo_update,
  todo_delete,
};
