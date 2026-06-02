const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        required : true
    },
    experience : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : 'applied'
    }
}, {timestamps : true});

const candidate = mongoose.model('candidate', candidateSchema);


module.exports = candidate;