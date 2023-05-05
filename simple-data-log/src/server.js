const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

let data = {}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Listening on port %d', port);
});

app.post('/', (req, res) => {
    const lname = req.body.lname;
    const fname = req.body.fname;
    
    if (lname in data) {
        data[lname].push(fname);
    }
    else {
        data[lname] = [fname];
    }
});

/*app.post('/request', (req, res) => {
    const lname = req.body.lname;

    if (lname in data) {
        res.send(data[lname])
    }
    else {
        res.send("No first names with this last name.")
    }
});*/