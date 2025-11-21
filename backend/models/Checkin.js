const mongoose = require('mongoose');

const CheckinSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String },
  email: { type: String },
  source: { type: String, enum: ['scan','manual'], default: 'scan' },
  ip: { type: String },
  userAgent: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Checkin', CheckinSchema);
