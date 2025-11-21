const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  startTime: { type: Date },
  endTime: { type: Date },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  shortId: { type: String, required: true, unique: true }, // readable short code
  qrToken: { type: String }, // token embedded in QR (could rotate)
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
