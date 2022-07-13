// Chunk 1
//jshint esversion:6
require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const app = express();


app.use(express.static("public"));
app.use(express.static("views"));

// Data parsing
app.use(express.urlencoded({
    extended: false
}));


app.use(express.json());


// Render home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));

});



// Start server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8081;
}

app.listen(port, function() {
  console.log(`server on port ${port}`);
});
