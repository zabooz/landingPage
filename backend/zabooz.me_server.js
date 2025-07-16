const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3500;

// Enable CORS for all origins (you can restrict this in production)
app.use(cors());

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '..', 'dist')));

// API endpoint to fetch insult
app.get('/api/insult', async (req, res) => {
  try {
    const response = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching insult:', error);
    res.status(500).json({ error: 'Failed to fetch insult' });
  }
});

// All other GET requests will serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
