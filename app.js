const express = require('express')
const app = express()


app.get('/', function(req, res) {
    res.send('Hi there<h3>watup</h3>')
})


app.listen(6969)