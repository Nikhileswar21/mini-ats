const express = require('express');
const router = express.Router();


router.get('/', function(req, res){
    res.end('fetch all candidates');
});

router.get('/:id', function(req, res){
    res.end('fetch candidate by id');
});


router.post('/', function(req, res){
    res.end('create a candidate');
});


router.delete('/:id', function(req, res){
    res.end('delete a candidate by id');
});


module.exports = router;
