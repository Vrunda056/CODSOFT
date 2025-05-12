const { sampleJobs } = require('./jobdata.js');
const { sampleApplications } = require('./applicationdata.js');
const { sampleEmployers } = require('./employerdata.js');
const { sampleJobSeekers } = require('./jobseekerdata.js');
const mongoose = require('mongoose');
const Application = require('../models/Application.js');
const Job = require('../models/Job.js');
const Employer = require('../models/Employer.js');
const JobSeeker = require('../models/Jobseeker.js');

async function seedDatabase() {
    try {
        await Application.insertMany(sampleApplications);
        console.log('Sample applications inserted successfully.');
    } catch (error) {
        console.error('Error inserting sample applications:', error);
    }
}

async function seedEmployerData() {
    try {
        await Employer.insertMany(sampleEmployers);
        console.log('Sample employers inserted successfully.');
    } catch (error) {
        console.error('Error inserting sample employers:', error);
    }
}

async function seedJobSeekerData() {
    try {
        await JobSeeker.insertMany(sampleJobSeekers);
        console.log('Sample job seekers inserted successfully.');
    } catch (error) {
        console.error('Error inserting sample job seekers:', error);
    }
}

async function seedJobData() {
    try {
        await Job.insertMany(sampleJobs);
        console.log('Sample jobs inserted successfully.');
    } catch (error) {
        console.error('Error inserting sample jobs:', error);
    }
}

// Connect to the database and seed the data
mongoose.connect('mongodb://127.0.0.1:27017/JobBoard', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to the database.');

        // Ensure each seeding function runs sequentially
        await seedJobData();
        await seedEmployerData();
        await seedJobSeekerData();
        await seedDatabase();
        console.log('Database seeding completed.');

        // Close the connection after all operations
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
