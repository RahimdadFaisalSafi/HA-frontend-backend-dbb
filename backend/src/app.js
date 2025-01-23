const express = require('express');
const db = require('../database/database')
const bcrypt = require('bcrypt')
const cors = require("cors");

const PORT = 3000;

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
    res.json({"Action": "Register || Login"})
})

app.post('/', (req, res) => {
    const username = req.body.username
    let password = req.body.password

    if(!username || !password){
        return res.status(400).send("Missing required fields: username and/or password.")
    }
    const hashedPassword = bcrypt.hashSync(password, 12)
    password = hashedPassword
    const query = db.db.prepare("INSERT INTO users (username, password) VALUES(?, ?)")
    const insert = query.run(username, hashedPassword)
    res.status(200).send("User added successfully");
})

app.post('/login', (req, res)=> {
    const username = req.body.lusername;
    const password = req.body.lpassword;
    console.log(username)
    console.log(password)

    if(!username || !password){
        return res.status(400).send("Missing required fields: username and/or password.")
    }

    const query = db.db.prepare("SELECT * FROM users WHERE username = ?").get(username)
    if(!query) {
        return res.status(404).send("User Not Found")
    }
    console.log(query.password)

    const hashedPassword = bcrypt.hashSync(password, 12)
    console.log(hashedPassword)
    const compare = bcrypt.compareSync(password, query.password)
    console.log(compare)
    if(compare) {
        return res.json({ success: true, message: "Login successful" });
    } else {
        res.status(400).json({ success: false, message: "Login failed" })
    }



})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

