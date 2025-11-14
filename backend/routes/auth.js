const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    console.log('Login attempt for email:', req.body.email);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log('User found:', !!user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      console.log('Invalid credentials');
      return res.status(400).send({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    console.log('Login successful for:', email);
    res.send({ user, token });
  } catch (e) {
    console.log('Login error:', e);
    res.status(400).send(e);
  }
});

module.exports = router;