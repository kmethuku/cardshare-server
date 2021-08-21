/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users } from '../db';
import { User, Deck } from '../interfaces';

async function getAll(email: string) : Promise<User[]> {
  const all = await Users.find({ email }, 'myDecks');
  return all;
}

async function getOne(email: string, id: string) : Promise<any> {
  const one: Array<User> = await Users.find({ email }, 'myDecks');
  const deck = one[0].myDecks.filter((ele) => id === String(ele._id));
  return deck[0];
}

async function postOne(email: string, body: Deck) {
  const user = await Users.findOne({ email });
  const username = user?.username;
  const newBody = { ...body, creator: username };
  const res = await Users.findOneAndUpdate({ email },
    { $push: { myDecks: newBody } },
    { new: true });
  return res;
}

async function deleteOne(email: string, id: string) {
  const res = await Users.findOneAndUpdate({ email },
    { $pull: { myDecks: { _id: id } } }, { new: true });
  return res;
}

export { getAll, getOne, postOne, deleteOne };
