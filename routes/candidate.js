const express = require('express');
const {getallCandidates, 
       getCandidateById, 
       createCandidate, 
       deleteCandidate,
       deleteAllCandidate,
       updateCandidate} = require('../controllers/candidateController')
const router = express.Router();


router.get('/', getallCandidates);

router.get('/:candidateId', getCandidateById);

router.post('/', createCandidate);

router.delete('/:candidateId', deleteCandidate);

router.delete('/', deleteAllCandidate);

router.put('/:candidateId', updateCandidate);

module.exports = router;
