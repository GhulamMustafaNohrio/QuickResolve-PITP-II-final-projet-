const express = require('express');
const Complaint = require('../models/Complaint');
const auth = require('../middleware/auth');

const router = express.Router();

// Get complaints
router.get('/', auth, async (req, res) => {
  try {
    let complaints;
    if (req.user.role === 'admin') {
      complaints = await Complaint.find().populate('userId', 'name email');
    } else {
      complaints = await Complaint.find({ userId: req.user._id });
    }
    res.send(complaints);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Create complaint
router.post('/', auth, async (req, res) => {
  try {
    const complaint = new Complaint({ ...req.body, userId: req.user._id });
    await complaint.save();
    res.status(201).send(complaint);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update complaint
router.put('/:id', auth, async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).send();
    }
    if (complaint.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Not authorized' });
    }
    // Only admin can update status
    if (req.body.status && req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Only admin can update status' });
    }
    Object.assign(complaint, req.body);
    await complaint.save();
    res.send(complaint);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete complaint
router.delete('/:id', auth, async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).send();
    }
    if (complaint.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Not authorized' });
    }
    await complaint.remove();
    res.send(complaint);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;