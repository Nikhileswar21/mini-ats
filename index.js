const express = require('express');
const router = require('./routes/candidate');
const mongoose = require('mongoose');
const app = express();

//connect to the db

mongoose.connect('mongodb://localhost:27017/miniAts')
.then(()=>{console.log('connected to the database')})
.catch((err) =>{console.log('error connnecting to the database', err)});


app.use(express.json());
app.use('/candidates', router);

app.listen(8000, ()=>{
    console.log('server is running on port 8000');
})