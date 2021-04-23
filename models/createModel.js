const { Users } = require ('../db');

async function getAll() {
  let all = await Users.find({ username: 'Kiran' }, 'myDecks');
  return all;
}

async function getOne(id) {
  let one = await Users.find({ username: 'Kiran'}, { myDecks: { $elemMatch: { _id: id } } });
  return one;
}

async function postOne(body) {
  let res = await Users.updateOne({ username: 'Kiran' }, { $push: { myDecks: body } });
  console.log(body)
  // let res = await Users.create(body);
  return res.nModified;
}

async function deleteOne(id) {
  let res = await Users.updateOne({ username: 'Kiran'}, { $pull: { myDecks: { _id: id } } });
  return res.nModified;
}

module.exports = { getAll, getOne, postOne, deleteOne }