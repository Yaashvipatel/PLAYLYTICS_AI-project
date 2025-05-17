const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
const mongoURI = 'mongodb+srv://pbl4:pbl4@cluster0.ntzxh7w.mongodb.net/play4?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define player schema
const playerSchema = new mongoose.Schema({
  name: String,
  sport: String,
  stats: Array,
});

const Player = mongoose.model('Player', playerSchema);

// Get all players or filter by sport
app.get('/players', async (req, res) => {
  try {
    const sportQuery = req.query.sport;
    let players;

    if (sportQuery) {
      players = await Player.find({ sport: new RegExp(`^${sportQuery}$`, 'i') });
    } else {
      players = await Player.find();
    }

    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get player by ID
app.get('/players/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ message: 'Player not found' });
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new player
app.post('/players', async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update player by ID
app.put('/players/:id', async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlayer) return res.status(404).json({ message: 'Player not found' });
    res.json(updatedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete player by ID
app.delete('/players/:id', async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (!deletedPlayer) return res.status(404).json({ message: 'Player not found' });
    res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
