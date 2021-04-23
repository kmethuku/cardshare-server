const createModel = require('../models/createModel');

async function getAll(req, res) {
  try {
    let all = await createModel.getAll();
    all.length === 0 ? res.status(404).send(all) : res.status(200).send(all);
  } catch (err) {
    res.status(404).send();
  }
}

async function getOne(req, res) {
  try {
    let one = await createModel.getOne(req.params.id);
    one[0].myDecks.length === 0 ? res.status(404).send(one) : res.status(200).send(one);
  } catch (err) {
    res.status(404).send();
  }
}

async function postOne(req, res) {
  try {
    let nModified = await createModel.postOne(req.body);
    nModified === 0 ? res.status(404).send(`No decks added`) : res.status(201).send(`Added ${nModified}`);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }

}

async function deleteOne(req, res) {
  try {
    let nDeleted = await createModel.deleteOne(req.params.id);
    nDeleted === 0 ? res.status(404).send(`No decks deleted`) : res.status(200).send(`Deleted ${nDeleted}`);
  } catch (err) {
    res.status(404).send();
  }
}

module.exports = { getAll, getOne, postOne, deleteOne };