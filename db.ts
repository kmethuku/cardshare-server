import mongoose, { Schema } from 'mongoose';
require('dotenv').config();
const DB_URI = (process.env.DB_URI as string);
import { User } from './interfaces';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));

const cardSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const deckSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: false,
  },
  cards: {
    type: [cardSchema],
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  OLID: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
    default: 0,
  },
  creator: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  myDecks: {
    type: [deckSchema],
    required: false,
  },
  savedDecks: {
    type: [deckSchema],
    required: false,
  },
});

const Users = mongoose.model<User>('User', userSchema);

export { Users, db };
