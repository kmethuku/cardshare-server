import { Request, Response } from 'express';

const createModel = require('../models/createModel');

async function getAllCreate(req:Request, res:Response) : Promise<void> {
  try {
    const all = await createModel.getAll(req.params.email);
    if (all.length === 0) {
      res.status(404).send(all);
    } else res.status(200).send(all);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function postOneCreate(req:Request, res:Response) : Promise<void> {
  try {
    const nModified = await createModel.postOne(req.params.email, req.body);
    if (nModified === 0) {
      res.status(404).send('No decks added');
    } else res.status(201).send(`Added ${nModified}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteOneCreate(req:Request, res: Response) : Promise<void> {
  try {
    const nDeleted = await createModel.deleteOne(req.params.email, req.params.id);
    if (nDeleted === 0) {
      res.status(404).send('No decks deleted');
    } else res.status(200).send(`Deleted ${nDeleted}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

export { getAllCreate, postOneCreate, deleteOneCreate };
