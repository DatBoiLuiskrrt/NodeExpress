const express = require("express");
const shortid = require('shortid');
const server = express();

server.use(express.json());

const totalUsers = [];
//POST	/api/users	Creates a user using the information sent inside the request body.
server.post("/api/users", (req,res) => {
    const users = req.body;

    users.id = shortid.generate();
    totalUsers.push(users);
    res.status(201).json(users);

});
//GET	/api/users	Returns an array users.
server.get("/api/users/", (req,res) => {
    res.status(200).json( { api:  {
        "User 1": "Aaron",
        "user 2": "John Cena",
    }})
})
const PORT = 4000;


server.listen(PORT, () => 
console.log(`\n *** API on http://localhost:${PORT} **\n`));