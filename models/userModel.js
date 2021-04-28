const { Users } = require ('../db');

async function postOne(body) {
  let res = await Users.create(body);
  return res.email;
}

async function getOne(email) {
  let one = await Users.find({}); // deleted email: email within {}
  return one;
}

async function deleteAll() {
  let deleted = await Users.deleteMany({});
  return deleted;
}

module.exports = { postOne, getOne, deleteAll };