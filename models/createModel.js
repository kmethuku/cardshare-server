const { Users } = require ('../db');

async function getAll(email) {
  let all = await Users.find({ email: email }, 'myDecks');
  // console.log('all', all)
  return all;
}

async function postOne(email, body) {
  let res = await Users.updateOne({ email: email }, { $push: { myDecks: body } });
  console.log('model email and body',email )
  console.log(body )
  return res.nModified;
}

async function deleteOne(email, id) {
  let res = await Users.updateOne({ email: email }, { $pull: { myDecks: { _id: id } } });
  return res.nModified;
}

module.exports = { getAll, postOne, deleteOne };