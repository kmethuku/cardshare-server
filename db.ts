import mongoose, { Schema, Document } from 'mongoose';

require('dotenv').config();

const DB_URI = (process.env.DB_URI as string);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));

// this is not implemented, couldn't get multer to work
// const highlightSchema = new Schema({
//   lastModified: {
//     type: Number,
//     required: true
//   },
//   lastModifiedDate: {
//     type: Date,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   size: {
//     type: Number,
//     required: true
//   },
//   type: {
//     type: String,
//     required: true
//   },
//   webkitRelativePath: {
//     type: String,
//     required: true
//   },
// });

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

export interface Card {
  question:string;
  answer:string;
}

export interface Deck {
  title: string;
  description: string;
  src: string;
  cards: Array<Card>;
  genre: string;
  OLID: string;
  votes: number;
  creator: string;
}

export interface User extends Document {
  username: string;
  email: string;
  myDecks: Array<Deck>;
  savedDecks: Array<Deck>;
}

/**
 * Document<User>
 */

const Users = mongoose.model<User>('User', userSchema);

export { Users, db };
