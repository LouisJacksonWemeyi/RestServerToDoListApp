const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.todo_create_getAll);
router.post('/', todoController.todo_create_post);
router.put('/:todoId', todoController.todo_update);
router.delete('/:todoId', todoController.todo_delete);

module.exports = router;
