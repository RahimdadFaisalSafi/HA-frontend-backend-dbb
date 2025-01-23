const express = require('express');

const PORT = 3000;

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({"Action": "Register || Login"})
})

app.post('/', (req, res) => {
    username = req.body.username
    password = req.body.password

    if(!username || !password){
        return res.status(400).send("Missing required fields: username and/or password.")
    }
    const hashedpassword = bcrypt.hashSync(password, 12)
    const query = db.prepare("INSERT INTO users (username, password) VALUES(?, ?)")
    const insert = query.run(username, password)




})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

