const route = require('express').Router();

route.get('/', (req, res) => {
    res.send('Hello World!')
})

const todoRoutes = require('./todos');
route.use('/todos', todoRoutes);

const itemRoutes = require('./item');
route.use('/item', itemRoutes);

route.get('/', (req, res) => {
    res.send('pages item utama')
})

module.exports = route;