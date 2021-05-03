/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users, User, Deck } from '../db';

async function getAll(email:string) : Promise<User[]> {
  const all = await Users.find({ email }, 'myDecks');
  return all;
}

async function postOne(email:string, body:Deck) {
  const res = await Users.findOneAndUpdate({ email }, { $push: { myDecks: body } }, { new: true });
  return res;
}

async function deleteOne(email:string, id:string) {
  const res = await Users.findOneAndUpdate({ email },
    { $pull: { myDecks: { _id: id } } }, { new: true });
  return res;
}

export { getAll, postOne, deleteOne };
