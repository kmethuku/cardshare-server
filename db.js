const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cardshare', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

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
  cards: { type: [cardSchema], required: true }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  passHash: { type: String, required: true },
  email: { type: String, required: true },
  myDecks: { type: [deckSchema], required: false },
  savedDecks: { type: [deckSchema], required: false }
});

const Users = mongoose.model('User', userSchema);

module.exports = { Users };

/*const { Users } = require ('../db');

async function getAll() {
  let all = await Users.find({ username: 'Kiran' }, 'myDecks');
  return all;
}

async function getOne(title) {
  let one = await Users.find({ username: 'Kiran'}, { myDecks: { $elemMatch: { "title": title } } });
  return one;
}

async function postOne(body) {
  let res = await Users.updateOne({ username: 'Kiran' }, { $push: { myDecks: body } });
  // console.log(res)
  // return res.nModified;
}

async function deleteOne(title) {
  let res = await Users.deleteOne({ username: 'Kiran'}, { myDecks: { $elemMatch: { "title": title } } });
  return res.deletedCount;
}

module.exports = { getAll, getOne, postOne, deleteOne } */