import{ Document } from 'mongoose';

export interface Card {
  question: string;
  answer: string;
}

export interface Deck extends Document {
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