// backend/routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job'); // your Mongoose model

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
// backend/models/Job.js