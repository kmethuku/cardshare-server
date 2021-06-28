/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users } from '../db';
import { User } from '../interfaces';

async function getAllSavedDecks(email: string) : Promise<Array<User>> {
  const all: Array<User> = await Users.find({ email }, 'savedDecks');
  return all;
}

async function getOneSavedDeck(email: string, id: string) : Promise<any> {
  const one: Array<User> = await Users.find({ email }, 'savedDecks');
  const deck = one[0].savedDecks.filter((ele) => id === String(ele._id));
  return deck[0];
}

async function saveOneDeck(email: string, body: any) : Promise<any> {
  const res = await Users.findOneAndUpdate({ email },
    { $push: { savedDecks: body } },
    { new: true });
  return res;
}

async function deleteOneDeck(email: string, id: string) : Promise<any> {
  const res = await Users.findOneAndUpdate({ email },
    { $pull: { savedDecks: { _id: id } } });
  return res;
}

export {
  getAllSavedDecks, getOneSavedDeck, saveOneDeck, deleteOneDeck,
};
