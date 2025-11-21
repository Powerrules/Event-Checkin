const express = require('express');
const QRCode = require('qrcode');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Event = require('../models/Event');
const { generateShortId, generateQrToken } = require('../utils/generateToken');

// Create event (admin)
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, location, startTime, endTime } = req.body;
    const shortId = generateShortId();
    const qrToken = generateQrToken();
    const event = await Event.create({
      title, description, location,
      startTime, endTime,
      createdBy: req.user._id,
      shortId,
      qrToken
    });

    // create check-in URL encoded into QR
    // When scanned, frontend opens /scan?token=<qrToken> and calls backend to process checkin
    const qrPayload = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/scan?token=${encodeURIComponent(qrToken)}`;
    const qrDataUrl = await QRCode.toDataURL(qrPayload);

    res.json({ event, qrDataUrl, qrPayload });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// List events (admin)
router.get('/', auth, async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});

// Get event by shortId or id
router.get('/:id', auth, async (req, res) => {
  const id = req.params.id;
  const event = await Event.findOne({ $or: [{ _id: id }, { shortId: id }] });
  if(!event) return res.status(404).json({ message: 'Event not found' });
  res.json(event);
});

// rotate QR token (optional)
router.post('/:id/rotate', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if(!event) return res.status(404).json({ message: 'Event not found' });
    const newToken = generateQrToken();
    event.qrToken = newToken;
    await event.save();
    const qrPayload = `${process.env.FRONTEND_URL}/scan?token=${encodeURIComponent(newToken)}`;
    const qrDataUrl = await QRCode.toDataURL(qrPayload);
    res.json({ qrDataUrl, qrPayload });
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
