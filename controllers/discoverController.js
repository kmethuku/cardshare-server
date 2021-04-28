const discoverModel = require('../models/discoverModel');

async function getPopular(req, res) {
  try {
    let all = await discoverModel.getPopular();
    all.length === 0 ? res.status(404).send(all) : res.status(200).send(all);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getByGenre(req, res) {
  try {
    let some = await discoverModel.getByGenre(req.params.genre);
    some.length === 0 ? res.status(404).send(some) : res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getByOLID(req, res) {
  try {
    let some = await discoverModel.getByOLID(req.params.OLID);
    some.length === 0 ? res.status(404).send(some) : res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getById(req, res) {
  try {
    let some = await discoverModel.getById(req.params.id);
    some.length === 0 ? res.status(404).send(some) : res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function postVote(req, res) {
  try {
    let nModified = await discoverModel.postVote(req.params.id, req.params.direction);
    nModified === 0 ? res.status(404).send(`No votes added`) : res.status(201).send(`Added ${nModified} vote(s)`);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = { getPopular, getByGenre, getByOLID, getById, postVote };