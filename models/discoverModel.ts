/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users, User } from '../db';

async function getPopular() : Promise<Array<User>> {
  const all:Array<User> = await Users.find();
  const result: any[] = [];
  for (let i = 0; i < all.length; i += 1) {
    const user: User = all[i];
    for (let j = 0; j < user.myDecks.length; j += 1) {
      const deck = user.myDecks[j];
      if (deck.votes > 10) {
        const deckObject = {
          votes: deck.votes,
          _id: deck._id,
          title: deck.title,
          description: deck.description,
          src: deck.src,
          genre: deck.genre,
          cards: deck.cards,
          OLID: deck.OLID,
          creator: user.username,
        };
        result.push(deckObject);
      }
    }
  }

  return result;
}

// @elemMatch returns only the first matched element

async function getByGenre(genre:string) {
  const allUsers = await Users.find();
  const resultDecks: any[] = [];
  allUsers.forEach((user: User) => {
    const genreDecks = user.myDecks.filter((deck: any) => deck.genre === genre);
    genreDecks.forEach((deck: any) => {
      resultDecks.push({
        votes: deck.votes,
        _id: deck._id,
        title: deck.title,
        description: deck.description,
        src: deck.src,
        genre: deck.genre,
        OLID: deck.OLID,
        cards: deck.cards,
        creator: user,
      });
    });
  });
  return resultDecks;
}

async function getByOLID(OLID:string) {
  const some = await Users.find({ myDecks: { $elemMatch: { OLID } } },
    { username: 1, myDecks: { $elemMatch: { OLID } } });
  return some;
}

async function getById(id:string) {
  const some = await Users.find({ myDecks: { $elemMatch: { _id: id } } },
    { username: 1, myDecks: { $elemMatch: { _id: id } } });
  return some;
}

async function postVote(id:string, direction:string) {
  let res;
  if (direction === 'up') res = await Users.findOneAndUpdate({ 'myDecks._id': id }, { $inc: { 'myDecks.$.votes': 1 } }, { new: true });
  else if (direction === 'down') res = await Users.findOneAndUpdate({ 'myDecks._id': id }, { $inc: { 'myDecks.$.votes': -1 } }, { new: true });
  return res;
}

export {
  getPopular, getByGenre, getByOLID, getById, postVote,
};
