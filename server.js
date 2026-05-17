const express = require('express');
const app = express();

app.use(express.json());

// GET endpoint
app.get('/users', (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    users: [
      { id: 1, name: "Hajatali", email: "hajatali@gmail.com" },
      { id: 2, name: "John", email: "john@gmail.com" }
    ]
  });
});

// POST endpoint
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  // Validation
  if (!name || !email) {
    return res.status(400).json({
      message: "Bad Request - name and email are required"
    });
  }

  res.status(201).json({
    message: "User created successfully",
    user: { name, email }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});