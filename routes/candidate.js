const express = require('express');
const {getallCandidates, getCandidateById, createCandidate, deleteCandidate} = require('../controllers/candidateController')
const router = express.Router();


router.get('/', getallCandidates);

router.get('/:candidateId', getCandidateById);

router.post('/', createCandidate);

router.delete('/:candidateId', deleteCandidate);




module.exports = router;
