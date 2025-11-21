const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const Checkin = require('../models/Checkin');

// Endpoint used by frontend when a QR token is scanned
router.post('/scan', async (req, res) => {
  try {
    const { token, name, email } = req.body;
    if(!token) return res.status(400).json({ message: 'token required' });

    // find event with token
    const event = await Event.findOne({ qrToken: token });
    if(!event) return res.status(404).json({ message: 'Event not found or token invalid' });

    const checkin = await Checkin.create({
      event: event._id,
      name,
      email,
      source: 'scan',
      ip: req.ip,
      userAgent: req.headers['user-agent']
    });

    res.json({ message: 'Checked in', checkin });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// manual checkin endpoint (admin or kiosk)
router.post('/manual', async (req, res) => {
  try {
    const { eventShortId, name, email } = req.body;
    if(!eventShortId) return res.status(400).json({ message: 'eventShortId required' });
    const event = await Event.findOne({ shortId: eventShortId });
    if(!event) return res.status(404).json({ message: 'Event not found' });
    const checkin = await Checkin.create({
      event: event._id,
      name,
      email,
      source: 'manual',
      ip: req.ip,
      userAgent: req.headers['user-agent']
    });
    res.json({ message: 'Checked in (manual)', checkin });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// analytics: get checkins for event
router.get('/event/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const checkins = await Checkin.find({ event: eventId }).sort({ createdAt: -1 });
    res.json(checkins);
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// simple global stats
router.get('/stats', async (req, res) => {
  try {
    const totalCheckins = await Checkin.countDocuments();
    const eventsCount = await Event.countDocuments();
    res.json({ totalCheckins, eventsCount });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
