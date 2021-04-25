const { Users } = require ('../db');

async function getAll(UID) {
  let all = await Users.find({ UID: UID }, 'savedDecks');
  return all;
}

async function saveOne(body) {
  let res = await Users.updateOne({ UID: body.UID }, { $push: { savedDecks: body } });
  return res.nModified;
}

async function deleteOne(UID, id) {
  let res = await Users.updateOne({ UID: UID }, { $pull: { savedDecks: { _id: id } } });
  return res.nModified;
}

module.exports = { getAll, saveOne, deleteOne }