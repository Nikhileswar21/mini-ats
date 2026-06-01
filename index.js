const express = require('express');
const router = require('./routes/candidate');
const app = express();





app.use('/candidates', router);

app.listen(8000, ()=>{
    console.log('server is running on port 8000');
})