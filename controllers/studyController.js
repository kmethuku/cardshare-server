const studyModel = require('../models/studyModel');

async function getAll(req, res) {
  try {
    let all = await studyModel.getAll(req.params.email);
    all.length === 0 ? res.status(404).send(all) : res.status(200).send(all);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function saveOne(req, res) {
  try {
    let nModified = await studyModel.saveOne(req.params.email, req.body);
    nModified === 0 ? res.status(404).send(`No decks added`) : res.status(201).send(`Added ${nModified}`);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}

async function deleteOne(req, res) {
  try {
    let nDeleted = await studyModel.deleteOne(req.params.email, req.params.id);
    nDeleted === 0 ? res.status(404).send(`No decks deleted`) : res.status(200).send(`Deleted ${nDeleted}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = { getAll, saveOne, deleteOne };