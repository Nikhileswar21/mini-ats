const candidate = require('../models/candidate');


let candidates = [
    {
        name : 'nikhil',
        email : 'nikhil@gmail.com',
        role : 'software engineer',
        experience : '2 ',
        status : 'applied'
    }
];

exports.getallCandidates = async function(req, res){
  
   return res.status(200).json({candidates});
}



