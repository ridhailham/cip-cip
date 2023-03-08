class TodoController {
    static getTodos(req, res) {
        const arrObject = [
            {
                id: 1,
                name: "Ridha Ilham Adi Setyawan",
            }, {
                id: 2,
                name: "Aditya Rizky",
            }, {
                id: 3,
                name: "Daffa Rabbanni"
            }
        ]
        res.json(arrObject);
    }

    static addTodos(req, res) {
        res.json({
            massage: "add todos broo"
        });
    }
}

module.exports = TodoController