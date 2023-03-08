const itemRoute = require('express').Router();

itemRoute.get('/', (req, res) => {
    res.send("GET items page");
})

module.exports = itemRoute;