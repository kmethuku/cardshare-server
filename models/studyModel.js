const { Users } = require ('../db');

async function getAll(email) {
  let all = await Users.find({ email: email }, 'savedDecks');
  return all;
}

async function saveOne(email, body) {
  let res = await Users.updateOne({ email: email }, { $push: { savedDecks: body } });
  return res.nModified;
}

async function deleteOne(email, id) {
  let res = await Users.updateOne({ email: email }, { $pull: { savedDecks: { _id: id } } });
  return res.nModified;
}

module.exports = { getAll, saveOne, deleteOne }