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
    let some = await discoverModel.getByGenre(req.body.genre);
    some.length === 0 ? res.status(404).send(some) : res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getByKey(req, res) {
  try {
    let some = await discoverModel.getByKey(req.body.key);
    some.length === 0 ? res.status(404).send(some) : res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function postVote(req, res) {
  try {
    let nModified = await discoverModel.postVote(req.body._id, req.body.direction);
    nModified === 0 ? res.status(404).send(`No votes added`) : res.status(201).send(`Added ${nModified} vote(s)`);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = { getPopular, getByGenre, getByKey, postVote };