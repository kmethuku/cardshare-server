const { Users } = require ('../db');

async function getPopular() {
  let all = await Users.find({ myDecks: { $elemMatch: { votes: { $gt: 10 } } } }, { myDecks: { $elemMatch: { votes: { $gt: 10 } } } });
  return all;
}

async function getByGenre(genre) {
  let some = await Users.find({ myDecks: { $elemMatch: { genre: genre } } }, { myDecks: { $elemMatch: { genre: genre } } });
  return some;
}

async function getByKey(key) {
  let some = await Users.find({ myDecks: { $elemMatch: { key: key } } }, { myDecks: { $elemMatch: { key: key } } });
  return some;
}

async function postVote(_id, direction) {
  let res;
  if (direction === 'up')
    res = await Users.updateOne({ "myDecks._id": _id }, { $inc: { "myDecks.$.votes": 1 } });
  else if (direction === 'down')
    res = await Users.updateOne({ "myDecks._id": _id }, { $inc: { "myDecks.$.votes": -1 } });
  return res.nModified;
}

module.exports = { getPopular, getByGenre, getByKey, postVote }