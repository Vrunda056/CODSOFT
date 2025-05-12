const express = require('express');
const router = express.Router();
const app = require('../models/Application'); // your Mongoose model

router.get('/', async (req, res) => {
  try {
    const applications = await app.find({});
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;