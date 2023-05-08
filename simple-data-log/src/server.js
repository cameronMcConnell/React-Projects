
// define express app and middleware
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// storage
let data = {}

// app middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// CORS headers
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// open port
app.listen(port, () => {
    console.log('Listening on port %d', port);
});

// handle submit requests
app.post('/submit', (req, res) => {
    
    // get submit json data
    const lname = Object.keys(req.body)[0];
    const fname = req.body[lname];
    
    if (lname in data) {
        data[lname].push(fname);
    }
    else {
        data[lname] = [fname];
    }
    
    res.type('text/plain');
    res.send('Submitted Successfully');
});

// handle request requests
app.post('/request', (req, res) => {
    
    // get submit json data
    const lname = Object.keys(req.body)[0];

    if (lname in data) {
        res.send(data[lname]);
    }
    else {
        res.send([]);
    }
});