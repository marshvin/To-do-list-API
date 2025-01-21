const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Create a new todo
router.post('/create', todoController.createTodo);

// Get all todos
router.get('/list', todoController.getTodos);

// Get a specific todo
router.get('/find/:id', todoController.getTodoById);

// Update a todo
router.put('/update/:id', todoController.updateTodo);

// Delete a todo
router.delete('/remove/:id', todoController.deleteTodo);

module.exports = router;
