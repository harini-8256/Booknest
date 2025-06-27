
// Register
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register Route
router.post('/register', async (req, res) => {
  try {
    console.log("👉 Register API hit");
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User registered" });

  } catch (err) {
    console.error("❌ Register Error:", err.message);
    res.status(500).json({ message: "Server error during registration" });
  }
});



// Login
// router.post('/login', async (req, res) => {
//   console.log('Login request:', req.body);

//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     console.log('User not found');
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const valid = await bcrypt.compare(req.body.password, user.password);
//   if (!valid) {
//     console.log('Invalid password');
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
//   console.log('Login successful, token:', token);
//   res.json({ token, userId: user._id });

// });
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token, userId: user._id, role: user.role }); // ✅ INCLUDE role

});



module.exports = router;
