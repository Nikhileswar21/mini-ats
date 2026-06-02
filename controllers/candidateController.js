const Candidate = require('../models/candidate');



exports.getallCandidates = async function(req, res){
   const candidate = await Candidate.find();
   return res.status(200).json({candidate});
}


exports.getCandidateById = async function(req, res){
    const candidateId = req.params.candidateId;
    const foundCandidate = await Candidate.findById(candidateId);
    if (!foundCandidate) {
        return res.status(404).json({message: 'Candidate not found'});
    }
    console.log(`candidate with id ${candidateId} retrieved`);
    return res.status(200).json({candidate: foundCandidate}); 
}

exports.createCandidate = async function(req, res){
    const candidateData = req.body;
    await Candidate.create(candidateData);
    return res.status(201).json('sucess');
}


exports.deleteCandidate = async function(req, res){
    const candidateId = req.params.candidateId;
    const deleteCandidate = await Candidate.findByIdAndDelete(candidateId);
    if (!deleteCandidate) {
        return res.status(404).json({ message: 'Candidate not found' });
    }
    return res.status(200).json({ message: 'Candidate deleted' });   
}


exports.deleteAllCandidate = async function(req, res){
    await Candidate.deleteMany({});
    return res.status(200).json({message: 'All candidates deleted'});
}

exports.updateCandidate = async function(req, res){
    const candidateId = req.params.candidateId;
    const updateData = req.body;
    const updatedCandidate = await Candidate.findByIdAndUpdate(candidateId, updateData, { new: true });
    if (!updatedCandidate) {
        return res.status(404).json({ message: 'Candidate not found' });
    }
    return res.status(200).json({ candidate: updatedCandidate });
}
