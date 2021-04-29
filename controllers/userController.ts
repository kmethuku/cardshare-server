/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';

import { postOne, getOne, deleteAll } from '../models/userModel';

async function postOneUser(req:Request, res:Response) : Promise<void> {
  try {
    const newUser = await postOne(req.body);
    if (!newUser) {
      res.status(404).send('Unable to add user');
    } else res.status(201).send(`Added ${newUser}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getOneUser(req:Request, res:Response) : Promise<void> {
  try {
    const user = await getOne(req.params.email);
    if (user.length === 0) {
      res.status(404).send('Unable to get user');
    } else res.status(200).send(user);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteAllUser(req:Request, res: Response) : Promise<void> {
  try {
    const deleted = await deleteAll();
    if (!deleted) {
      res.status(404).send('Unable to delete users');
    } else res.status(200).send();
  } catch (err) {
    res.status(404).send(err);
  }
}

export { postOneUser, getOneUser, deleteAllUser };
