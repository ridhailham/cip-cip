const todoRoute = require('express').Router();
const todosController = require('../controller/TodoController');



todoRoute.get('/', todosController.getTodos);

todoRoute.get('/add', todosController.addTodos);

module.exports = todoRoute;