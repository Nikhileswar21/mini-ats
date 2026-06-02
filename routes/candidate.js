const express = require('express');
const {getallCandidates} = require('../controllers/candidateController')
const router = express.Router();


router.get('/', getallCandidates);




module.exports = router;
