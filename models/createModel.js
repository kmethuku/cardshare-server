const { Users } = require ('../db');

async function getAll(UID) {
  let all = await Users.find({ UID: UID }, 'myDecks');
  return all;
}

async function postOne(body) {
  let res = await Users.updateOne({ UID: body.UID }, { $push: { myDecks: body } });
  return res.nModified;
}

async function deleteOne(UID, id) {
  let res = await Users.updateOne({ UID: UID }, { $pull: { myDecks: { _id: id } } });
  return res.nModified;
}

module.exports = { getAll, postOne, deleteOne };