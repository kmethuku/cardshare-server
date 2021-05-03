/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users, User } from '../db';

async function getAllSavedDecks(email:string) : Promise<Array<User>> {
  const all:Array<User> = await Users.find({ email }, 'savedDecks');
  return all;
}

async function saveOneDeck(email:string, body: any) : Promise<any> {
  const res = await Users.findOneAndUpdate({ email },
    { $push: { savedDecks: body } },
    { new: true });
  return res;
}

async function deleteOneDeck(email:string, id: string) : Promise<any> {
  const res = await Users.findOneAndUpdate({ email },
    { $pull: { savedDecks: { _id: id } } },
    { new: true });
  return res;
}

export { getAllSavedDecks, saveOneDeck, deleteOneDeck };
