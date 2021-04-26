const { Users } = require ('../db');

async function getPopular() {
  let all = await Users.find({ myDecks: { $elemMatch: { votes: { $gt: 10 } } } }, { username: 1, myDecks: { $elemMatch: { votes: { $gt: 10 } } } });
  return all;
}

async function getByGenre(genre) {
  let some = await Users.find({ myDecks: { $elemMatch: { genre: genre } } }, { username: 1, myDecks: { $elemMatch: { genre: genre } } });
  return some;
}

async function getByOLID(OLID) {
  let some = await Users.find({ myDecks: { $elemMatch: { OLID: OLID } } }, { username: 1, myDecks: { $elemMatch: { OLID: OLID } } });
  return some;
}

async function getById(id) {
  let some = await Users.find({ myDecks: { $elemMatch: { _id: id } } }, { username: 1, myDecks: { $elemMatch: { _id: id } } });
  return some;
}

async function postVote(id, direction) {
  let res;
  if (direction === 'up')
    res = await Users.updateOne({ "myDecks._id": id }, { $inc: { "myDecks.$.votes": 1 } });
  else if (direction === 'down')
    res = await Users.updateOne({ "myDecks._id": id }, { $inc: { "myDecks.$.votes": -1 } });
  return res.nModified;
}

module.exports = { getPopular, getByGenre, getByOLID, getById, postVote }