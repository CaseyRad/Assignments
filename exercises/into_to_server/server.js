const express = require('express')
const app = express()

// Server Route
app.get("/hello", (req, res) => {
    res.send("Hello World!")
})



app.listen(7000, () => {
    console.log("Server is Running on Port 7000")
})

