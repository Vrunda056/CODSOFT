const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // for password hashing


const jobseekerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        trim: true,
    },
    skills: {
        type: [String],
        default: [],
    },
    experience: {
        type: Number,
        default: 0, // in years
    },
    education: {
        type: String,
        trim: true,
    },
    resume: {
        type: String, // URL or file path to the resume
    },
    appliedJobs: [
        {
            jobId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Job',
            },
            appliedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
}, { timestamps: true });


module.exports = mongoose.model('Jobseeker', jobseekerSchema);