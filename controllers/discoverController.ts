/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { getPopular, getByGenre, getByOLID, getById, postVote } from '../models/discoverModel';
import { User } from '../db';

async function getPopular(req:Request, res:Response) : Promise<void> {
  try {
    const all:Array<User> = await getPopular();
    if (all.length === 0) {
      res.status(404).send(all);
    } else res.status(200).send(all);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getByGenre(req:Request, res:Response) : Promise<void> {
  try {
    const some = await getByGenre(req.params.genre);
    if (some.length === 0) {
      res.status(404).send(some);
    } else res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getByOLID(req:Request, res:Response) : Promise<void> {
  try {
    const some = await getByOLID(req.params.OLID);
    if (some.length === 0) {
      res.status(404).send(some);
    } else res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getById(req:Request, res:Response) : Promise<void> {
  try {
    const some = await getById(req.params.id);
    if (some.length === 0) {
      res.status(404).send(some);
    } else res.status(200).send(some);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function postVote(req:Request, res: Response) : Promise<void> {
  try {
    const nModified = await postVote(req.params.id:Request<string>, req.params.direction);
    if (nModified === 0) {
      res.status(404).send('No votes added');
    } else res.status(201).send(`Added ${nModified} vote(s)`);
  } catch (err) {
    res.status(404).send(err);
  }
}

export {
  getPopular, getByGenre, getByOLID, getById, postVote,
};
