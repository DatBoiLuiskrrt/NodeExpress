const express = require("express");
const server = express();

server.use(express.json());

const totalUsers = [];

server.post("/api/users", (req,res) => {
    const users = req.body;

    users.id = shortid.generate();
    totalUsers.push(users);
    res.status(201).json(users);

})
const PORT = 5000;


server.listen(PORT, () => 
console.log(`\n *** API on http://localhost:${PORT} **\n`));