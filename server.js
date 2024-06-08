const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
})


const app = express()


app.use(cors())
app.use(express.json())


app.get("/api/test", (req, res)=>{
    res.status(200).send("Hello World")
})

app.get("/api/students", (req, res)=>{

    db.query("SELECT * FROM attractions", (err, rs)=>{

        if(err) throw err

        res.status(200).send(rs)
    })
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})