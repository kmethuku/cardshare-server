/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { postOne, getOne, deleteAll } from '../models/userModel';

async function postOneUser(req: Request, res: Response): Promise<void> {
  try {
    const newUser = await postOne(req.body);
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getOneUser(req: Request, res: Response): Promise<void> {
  try {
    const user = await getOne(req.params.email);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteAllUser(req: Request, res: Response): Promise<void> {
  try {
    await deleteAll();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
}

export { postOneUser, getOneUser, deleteAllUser };
