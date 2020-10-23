const express = require("express")
var fs = require('fs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// makes the server able to share pictures and static content
app.use(express.static("public"))

// port will default to 3000 if no port is given
const port = process.env.PORT ? process.env.PORT : 8000

var files = fs.readdirSync(__dirname + '/public/images/');

app.get("/", (req, res) => {
    return res.send(__dirname + '/public/index.html')
})

app.get("/photos", (req, res) => {
    return res.send({ response: files })
})

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error")
    } else {
        console.log("Server launched succesfully on port", port)
    }
})