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
//var files = ['https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
//            'https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//           'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//           'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']

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