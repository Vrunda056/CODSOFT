const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Jobseeker = require('../models/Jobseeker');
const router = express.Router();
require('dotenv').config(); // To load environment variables

// Secret Key for JWT (use environment variable)
const secretKey = process.env.JWT_SECRET_KEY || 'default_secret_key'; // Fallback to default if not set

// Registration Route
// Registration Route (without hashing)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const existingUser = await Jobseeker.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Directly save the password without hashing
    const user = new Jobseeker({ name, email, password, phone });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err); // Log the error for more info
    res.status(500).json({ message: 'Server error' });
  }
});


// Login Route (without password hashing)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Jobseeker.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Log the email, password from the request and the stored password
    console.log('Email from client:', email);
    console.log('Password from client:', password);
    console.log('Stored password in DB:', user.password);

    // Compare the password directly without hashing
    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    // Return the token to the client
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get jobseeker profile by ID
router.get('/:id', async (req, res) => {
  try {
      const user = await Jobseeker.findById(req.params.id).populate('appliedJobs.jobId').populate('savedJobs');
      if (!user) return res.status(404).json({ message: 'User not found' });

      res.json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// Update jobseeker profile
router.put('/:id', async (req, res) => {
  try {
      const updated = await Jobseeker.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updated);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});




module.exports = router;
