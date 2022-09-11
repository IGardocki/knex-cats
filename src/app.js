const express = require('express');
const app = express();
const port = 8082;
const knex = require('knex')(require('../knexfile.js')["development"]);
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send(`App up on port ${port}.`);
})

app.get('/cats', (req, res) => {
    knex('cat')
    .select('*')
    .then(cat =>{
        // var catNames = cat.map(cat => cat.name);
        res.send(cat);
    })
    // res.send()
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})