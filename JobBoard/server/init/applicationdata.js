const mongoose = require('mongoose');


const sampleApplications = [
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'John Doe',
        applicantEmail: 'johndoe@example.com',
        resume: 'resume_johndoe.pdf',
        coverLetter: 'I am excited to apply for this position.',
        status: 'Pending',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Jane Smith',
        applicantEmail: 'janesmith@example.com',
        resume: 'resume_janesmith.pdf',
        coverLetter: 'Looking forward to contributing to your team.',
        status: 'Reviewed',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Alice Johnson',
        applicantEmail: 'alicejohnson@example.com',
        resume: 'resume_alicejohnson.pdf',
        coverLetter: 'I believe my skills match the job requirements.',
        status: 'Accepted',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Bob Brown',
        applicantEmail: 'bobbrown@example.com',
        resume: 'resume_bobbrown.pdf',
        coverLetter: 'I am eager to bring my expertise to your company.',
        status: 'Rejected',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Charlie Green',
        applicantEmail: 'charliegreen@example.com',
        resume: 'resume_charliegreen.pdf',
        coverLetter: 'I am passionate about this field.',
        status: 'Pending',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Diana White',
        applicantEmail: 'dianawhite@example.com',
        resume: 'resume_dianawhite.pdf',
        coverLetter: 'I have extensive experience in this domain.',
        status: 'Reviewed',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Ethan Black',
        applicantEmail: 'ethanblack@example.com',
        resume: 'resume_ethanblack.pdf',
        coverLetter: 'I am confident in my ability to excel in this role.',
        status: 'Accepted',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Fiona Blue',
        applicantEmail: 'fionablue@example.com',
        resume: 'resume_fionablue.pdf',
        coverLetter: 'I am excited to join your team.',
        status: 'Rejected',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'George Yellow',
        applicantEmail: 'georgeyellow@example.com',
        resume: 'resume_georgeyellow.pdf',
        coverLetter: 'I am a quick learner and team player.',
        status: 'Pending',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Hannah Red',
        applicantEmail: 'hannahred@example.com',
        resume: 'resume_hannahred.pdf',
        coverLetter: 'I am eager to contribute to your success.',
        status: 'Reviewed',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Ian Gray',
        applicantEmail: 'iangray@example.com',
        resume: 'resume_iangray.pdf',
        coverLetter: 'I have a strong background in this field.',
        status: 'Accepted',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Julia Violet',
        applicantEmail: 'juliaviolet@example.com',
        resume: 'resume_juliaviolet.pdf',
        coverLetter: 'I am enthusiastic about this opportunity.',
        status: 'Rejected',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Kevin Orange',
        applicantEmail: 'kevinorange@example.com',
        resume: 'resume_kevinorange.pdf',
        coverLetter: 'I am confident in my skills and experience.',
        status: 'Pending',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Laura Pink',
        applicantEmail: 'laurapink@example.com',
        resume: 'resume_laurapink.pdf',
        coverLetter: 'I am excited to bring my talents to your company.',
        status: 'Reviewed',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Michael Cyan',
        applicantEmail: 'michaelcyan@example.com',
        resume: 'resume_michaelcyan.pdf',
        coverLetter: 'I am passionate about this industry.',
        status: 'Accepted',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Nina Brown',
        applicantEmail: 'ninabrown@example.com',
        resume: 'resume_ninabrown.pdf',
        coverLetter: 'I am eager to learn and grow with your team.',
        status: 'Rejected',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Oliver Purple',
        applicantEmail: 'oliverpurple@example.com',
        resume: 'resume_oliverpurple.pdf',
        coverLetter: 'I am a dedicated and hardworking individual.',
        status: 'Pending',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Paula Gold',
        applicantEmail: 'paulagold@example.com',
        resume: 'resume_paulagold.pdf',
        coverLetter: 'I am excited about the opportunity to work with you.',
        status: 'Reviewed',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Quincy Silver',
        applicantEmail: 'quincysilver@example.com',
        resume: 'resume_quincysilver.pdf',
        coverLetter: 'I am confident in my ability to succeed in this role.',
        status: 'Accepted',
    },
    {
        jobId: new mongoose.Types.ObjectId(),
        applicantName: 'Rachel Bronze',
        applicantEmail: 'rachelbronze@example.com',
        resume: 'resume_rachelbronze.pdf',
        coverLetter: 'I am eager to bring my skills to your team.',
        status: 'Rejected',
    },
];

// Insert the sample data into the database
module.exports = {sampleApplications : sampleApplications};   