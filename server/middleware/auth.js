import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Import Admin model
import Admin from'../models/Admin.js';

const router = express.Router();

// Route to handle admin login
router.post('/login', async (req, res) => {
  try {
    // Extract data from request body
    const { email, password } = req.body;

    // Check if admin exists
    let admin = await Admin.findOne({ email });

    // If admin doesn't exist, send error response
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);

    // If passwords don't match, send error response
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const payload = {
      admin: {
        id: admin._id
      }
    };

    jwt.sign(payload, 'jwtsecret', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      // Send the token back to the client as part of the response
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
