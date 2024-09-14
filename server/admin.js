import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "./models/Admin.js";

const router = express.Router();
// Route to handle admin registration
router.post("/signup", async (req, res) => {
  try {
    // Extract data from request body
    const { username, email, password } = req.body;

    // Check if admin already exists
    let admin = await Admin.findOne({ email });

    // If admin exists, send error response
    if (admin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Create a new admin instance
    admin = new Admin({
      username,
      email,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);

    // Save admin to database
    await admin.save();

    // Send success response
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Route to handle admin login
router.post("/login", async (req, res) => {
  try {
    // Extract data from request body
    const { email, password } = req.body;

    // Check if admin exists
    let admin = await Admin.findOne({ email });

    // If admin doesn't exist, send error response
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);

    // If passwords don't match, send error response
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create and return JWT token
    const payload = {
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name, // If you want to include more details
      },
    };

    // Sign the token with a secret key
    jwt.sign(payload, "jwtsecret", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;

      // Send token back to client
      res.json({
        token,
        user: {
          // Optionally, return user data
          id: admin._id,
          email: admin.email,
          name: admin.name,
        },
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
export default router;
