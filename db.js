const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cardshare', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//this is not implemented, couldn't get multer to work
const highlightSchema = new mongoose.Schema({
  lastModified: { type: Number, required: true },
  lastModifiedDate: { type: Date, required: true },
  name: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
  webkitRelativePath: { type: String, required: true },
});

const cardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  // highlight: { type: highlightSchema, required: false }
});

const deckSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  src: { type: String, required: false },
  cards: { type: [cardSchema], required: true },
  genre: { type: String, required: true },
  OLID: { type: String, required: true },
  votes: { type: Number, required: true, default: 0 },
  creator: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  myDecks: { type: [deckSchema], required: false },
  savedDecks: { type: [deckSchema], required: false }
});

const Users = mongoose.model('User', userSchema);

module.exports = { Users };