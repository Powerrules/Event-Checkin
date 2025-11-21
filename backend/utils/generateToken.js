const { v4: uuidv4 } = require('uuid');

function generateShortId() {
  // quick readable id: use uuid and take first 8 chars
  return uuidv4().split('-')[0];
}

function generateQrToken() {
  // random token for checkin validation
  return uuidv4();
}

module.exports = { generateShortId, generateQrToken };
