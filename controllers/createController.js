const createModel = require('../models/createModel');

async function getAll(req, res) {
  try {
    let all = await createModel.getAll(req.params.email);
    // console.log('getAll')
    all.length === 0 ? res.status(404).send(all) : res.status(200).send(all);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function postOne(req, res) {
  try {
    let nModified = await createModel.postOne(req.params.email, req.body);
    console.log(typeof(req.params.email))
    // console.log('postOne')
    nModified === 0 ? res.status(404).send(`No decks added`) : res.status(201).send(`Added ${nModified}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteOne(req, res) {
  try {
    let nDeleted = await createModel.deleteOne(req.params.email, req.params.id);
    nDeleted === 0 ? res.status(404).send(`No decks deleted`) : res.status(200).send(`Deleted ${nDeleted}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = { getAll, postOne, deleteOne };