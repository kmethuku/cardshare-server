/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import {
  getPopular, getByGenre, getByOLID, getById, postVote,
} from '../models/discoverModel';

async function getPopularDiscover(req:Request, res:Response) : Promise<void> {
  try {
    const all = await getPopular();
    res.status(200).send(all);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getByGenreDiscover(req:Request, res:Response) : Promise<void> {
  try {
    const some = await getByGenre(req.params.genre);
    res.status(200).send(some);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getByOLIDDiscover(req:Request, res:Response) : Promise<void> {
  try {
    const some = await getByOLID(req.params.OLID);
    res.status(200).send(some);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getByIdDiscover(req:Request, res:Response) : Promise<void> {
  try {
    const some = await getById(req.params.id);
    res.status(200).send(some);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function postVoteDiscover(req:Request, res: Response) : Promise<void> {
  try {
    const result = await postVote(req.params.id, req.params.direction);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

export {
  getPopularDiscover, getByGenreDiscover, getByOLIDDiscover, getByIdDiscover, postVoteDiscover,
};
