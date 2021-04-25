const userModel = require('../models/userModel');

async function postOne(req, res) {
  try {
    let newUID = await userModel.postOne(req.body);
    !newUID ? res.status(404).send(`Unable to add user`) : res.status(201).send(`Added ${newUID}`);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}

module.exports = { postOne };