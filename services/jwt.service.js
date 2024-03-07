// jwtService.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error.message);
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
