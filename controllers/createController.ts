/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { getAll, postOne, deleteOne } from '../models/createModel';

async function getAllCreate(req:Request, res:Response) : Promise<void> {
  try {
    const all = await getAll(req.params.email);
    res.status(200).send(all);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function postOneCreate(req:Request, res:Response) : Promise<void> {
  try {
    const result = await postOne(req.params.email, req.body);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteOneCreate(req:Request, res: Response) : Promise<void> {
  try {
    await deleteOne(req.params.email, req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
}

export { getAllCreate, postOneCreate, deleteOneCreate };
