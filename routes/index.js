const express = require('express');
const noteRouter = require('./notes');


const app = express();

app.use('/notes', noteRouter);

app.use((req,res) => {
    res.status(404).send("Router Not Found");
});

module.exports = app;