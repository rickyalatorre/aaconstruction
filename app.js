// Chunk 1
//jshint esversion:6
require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const app = express();



app.use(express.static("public"));
// Data parsing
app.use(express.urlencoded({
    extended: false
}));


app.use(express.json());



// email, subject, text
app.post('/email', (req, res) => {

    const { subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});


// Render home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Error page
app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'failed.html'));
});

// Email sent page
app.get('/email/sent', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});


// Start server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, function() {
  console.log("Server has started Successfully");
});
