/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users, User, Deck } from '../db';

async function getAll(email:string) : Promise<User[]> {
  const all = await Users.find({ email }, 'myDecks');
  return all;
}

async function postOne(email:string, body:Deck) {
  const res = await Users.updateOne({ email }, { $push: { myDecks: body } });
  return res.nModified;
}

async function deleteOne(email:string, id:string) {
  const res = await Users.updateOne({ email }, { $pull: { myDecks: { _id: id } } });
  return res.nModified;
}

export { getAll, postOne, deleteOne };
