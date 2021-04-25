const { Users } = require ('../db');

async function postOne(body) {
  let res = await Users.create(body);
  return res.UID;
}

module.exports = { postOne };