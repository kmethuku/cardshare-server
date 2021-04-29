/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users, User } from '../db';

async function getAllSavedDecks(email:string) : Promise<Array<User>> {
  const all:Array<User> = await Users.find({ email }, 'savedDecks');
  return all;
}

async function saveOneDeck(email:string, body: any) : Promise<any> {
  const res:any = await Users.updateOne({ email }, { $push: { savedDecks: body } });
  return res.nModified;
}

async function deleteOneDeck(email:string, id: string) : Promise<any> {
  const res:any = await Users.updateOne({ email }, { $pull: { savedDecks: { _id: id } } });
  return res.nModified;
}

export { getAllSavedDecks, saveOneDeck, deleteOneDeck };
