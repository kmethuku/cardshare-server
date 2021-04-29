/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { getAllSavedDecks, saveOneDeck, deleteOneDeck } from '../models/studyModel';

async function getAllStudy(req:Request, res:Response) : Promise<void> {
  try {
    const all : Array<any> = await getAllSavedDecks(req.params.email);
    if (all.length === 0) {
      res.status(404).send(all);
    } else res.status(200).send(all);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function saveOneStudy(req:Request, res:Response) : Promise<void> {
  try {
    const nModified : number = await saveOneDeck(req.params.email, req.body);
    if (nModified === 0) {
      res.status(404).send('No decks added');
    } else res.status(201).send(`Added ${nModified}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteOneStudy(req:Request, res:Response) : Promise<void> {
  try {
    const nDeleted : number = await deleteOneDeck(req.params.email, req.params.id);
    if (nDeleted === 0) {
      res.status(404).send('No decks deleted');
    } else res.status(200).send(`Deleted ${nDeleted}`);
  } catch (err) {
    res.status(404).send(err);
  }
}

export { getAllStudy, saveOneStudy, deleteOneStudy };
