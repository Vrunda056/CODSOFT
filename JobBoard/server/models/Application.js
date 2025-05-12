const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    applicantName: {
        type: String,
        required: true,
        trim: true,
    },
    applicantEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    resume: {
        type: String,
        required: true,
    },
    coverLetter: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Pending', 'Reviewed', 'Accepted', 'Rejected'],
        default: 'Pending',
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;