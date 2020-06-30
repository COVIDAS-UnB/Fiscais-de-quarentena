const express = require('express')
const cors = require('cors')
const routes = require('./routes.js')
const app = express()
const server = require('http').Server(app)

require("dotenv-safe").config();

require('./src/database');

app.use(cors());
app.use(express.json());
app.use(routes);

// Log errors.
app.use((err, req, res, next) => {
    console.error(err.stack);
    next(err);
});


// Handle client errors.
app.use((err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
});

// Handle errors.
app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
});

server.listen(3050);

