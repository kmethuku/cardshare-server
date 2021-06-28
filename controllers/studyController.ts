/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { getAllSavedDecks, getOneSavedDeck, saveOneDeck, deleteOneDeck } from '../models/studyModel';

async function getAllStudy(req: Request, res: Response) : Promise<void> {
  try {
    const all: Array<any> = await getAllSavedDecks(req.params.email);
    res.status(200).send(all);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getOneStudy(req: Request, res: Response) : Promise<void> {
  try {
    const one: Array<any> = await getOneSavedDeck(req.params.email, req.params.id);
    res.status(200).send(one);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function saveOneStudy(req: Request, res: Response) : Promise<void> {
  try {
    const result = await saveOneDeck(req.params.email, req.body);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteOneStudy(req: Request, res: Response) : Promise<void> {
  try {
    await deleteOneDeck(req.params.email, req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
}

export { getAllStudy, getOneStudy, saveOneStudy, deleteOneStudy };
