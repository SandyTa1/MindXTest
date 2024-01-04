const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Secret key for JWT
const JWT_SECRET = 'your-secret-key';

// Login API endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate the username and password
  if (username !== 'admin' || password !== 'password') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

  // Send the token as a response
  res.json({ token });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});