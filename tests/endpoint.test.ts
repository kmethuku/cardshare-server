/* eslint-disable */
/* tslint-disable */
import '../config';
import express from 'express';
import router from '../router';
import supertest from 'supertest';
import mongoose from 'mongoose';
import { Users } from '../db';
import mocks from './mocks'


require('dotenv').config();

const PORT = (process.env.PORT as string);
const DB_URI = (process.env.DB_URI as string);
const port:number = Number(PORT) || 3001;

describe('User endpoint testing', () => {
  const server = express();
  server.use(express.json());
  server.use(router);
  const request = supertest(server)

  beforeAll(async () => {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  })

  afterAll(async (done) => {
    await Users.deleteMany();
    mongoose.connection.close();
    //console.log('here')
    done();
  })

  it('should save a new user to the database', async (done) => {
    const result = await request.post('/users')
      .send(mocks.testUser);

    const confirmUser = await Users.findOne({ email: mocks.testUser.email})
    if (confirmUser && confirmUser.email) {
      expect(confirmUser.email).toBe(mocks.testUser.email)
    }
    done();
  })

  it('should get a user\'s profile information', async (done) => {

    const result = await request.get(`/users/${mocks.testUser.email}`)
    const userProfile = result.body[0]
    expect(userProfile.email).toBe(mocks.testUser.email);
    done();
  })
})

describe('Create end point testing', () => {
  const server = express();
  server.use(express.json());
  server.use(router);
  const request = supertest(server)

  beforeAll(async () => {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    await Users.insertMany(mocks.testUserArray)
  })

  afterAll(async (done) => {
    await Users.deleteMany();
    mongoose.connection.close();
    done();
  })

  it('should add a newly created deck to a user\'s profile', async (done) => {
    let result = await request.post(`/myDecks/${mocks.testUserArray[0].email}`)
      .send(mocks.testDeck)
      .then((res) => res.body)
    const firstUser = await Users.findOne({ email: mocks.testUserArray[0].email}, { myDecks: true, })
    if (firstUser && firstUser.myDecks[0]) {
      expect(firstUser.myDecks[0].title).toEqual(result.myDecks[0].title)
    } else fail('User not found.')
    done();
  })

  it('should get all of a users create deck', async (done) => {
    const result = await request.get(`/myDecks/${mocks.testUserArray[2].email}`);
    const resultDecks = result.body[0].myDecks.map((deck:any)=> deck.title);
    expect(resultDecks).toEqual(["First Test Deck", "Second Test Deck"])
    done();
  })

  it('should delete a deck by user email and deck id', async (done) => {
    const result = await request.get(`/myDecks/${mocks.testUserArray[2].email}`);
    const firstDeckId = result.body[0].myDecks[0]._id
    const deleteDeck = await request.delete(`/myDecks/${mocks.testUserArray[2].email}-${firstDeckId}`)
    const resultArr = await request.get(`/myDecks/${mocks.testUserArray[2].email}`);
    expect(resultArr.body.length).toEqual(1)
    done();
  })

})

describe ('Discover end point testing', () => {
  const server = express();
  server.use(express.json());
  server.use(router);
  const request = supertest(server)

  beforeAll(async () => {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    await Users.insertMany(mocks.testUserArray)
  })

  afterAll(async (done) => {
    await Users.deleteMany();
    mongoose.connection.close();
    done();
  })

  it('should get array of popular decks', async (done) => {
    const result = await request.get(`/discover/`);
    const usernameResult = result.body.map((user:any)=> user.username)
    expect(usernameResult).toEqual(mocks.discoverUserArrayResult)
    done();
  });

  it('should get array of Users by genre deck - history', async (done) => {
    const result = await request.get(`/discover/genre/history`);
    const usernameResult = result.body.map((user:any)=> user.username)
    expect(usernameResult).toEqual(mocks.discoverHistoryArrayResult)
    done();
  });
  it('should get array of Users by genre deck - self-growth', async (done) => {
    const result = await request.get(`/discover/genre/self-growth`);
    const usernameResult = result.body.map((user:any)=> user.username)
    expect(usernameResult).toEqual(mocks.discoverSelfGrowthArrayResult)
    done();
  });
  it('should get array of Users by OLID', async (done) => {
    const result = await request.get(`/discover/OLID/OLID2`);
    const usernameResult = result.body.map((user:any)=> user.username)
    expect(usernameResult).toEqual(["testUserTwo"])
    done();
  });
  it('should get array of Users by deck id', async (done) => {
    const result:any = await request.get('/discover/genre/history');
    const resultUser = result.body[0].username;
    const resultDeckId = result.body[0].myDecks[0]._id;
    const userResult = await request.get('/discover/'+resultDeckId)
    expect(resultUser).toEqual(userResult.body[0].username)
    done();
  });
  it('should get array of Users by deck id to vote up', async (done) => {
    const result:any = await request.get('/discover/genre/history');
    const resultUserVotes = result.body[0].myDecks[0].votes;
    const resultDeckId = result.body[0].myDecks[0]._id;
    const voteUp = await request.get('/discover/vote/'+resultDeckId+"-up")
    const userResult = await request.get('/discover/'+resultDeckId)
    expect(resultUserVotes+1).toEqual(userResult.body[0].myDecks[0].votes);
    done();
  });
  it('should get array of Users by deck id to vote down', async (done) => {
    const result:any = await request.get('/discover/genre/history');
    const resultUserVotes = result.body[0].myDecks[0].votes;
    const resultDeckId = result.body[0].myDecks[0]._id;
    const voteUp = await request.get('/discover/vote/'+resultDeckId+"-down")
    const userResult = await request.get('/discover/'+resultDeckId)
    expect(resultUserVotes-1).toEqual(userResult.body[0].myDecks[0].votes);
    done();
  });
  
})

describe('Study deck end point testing', () => {
  const server = express();
  server.use(express.json());
  server.use(router);
  const request = supertest(server)

  beforeAll(async () => {
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    await Users.insertMany(mocks.testUserArray)
  })

  afterAll(async (done) => {
    await Users.deleteMany();
    mongoose.connection.close();
    done();
  })

  it('should get array of Users saved deck by email', async (done) => {
    const result = await request.get(`/savedDecks/${mocks.testUserArray[2].email}`);
    const resultDecks = result.body[0].savedDecks.map((deck:any)=> deck.title)
    expect(resultDecks).toEqual(["First Popular Test Deck", "Second Popular Test Deck"])
    done();
  });

  it('should add a newly created deck to a user\'s savedDeck', async (done) => {
    const beforeResult = await request.get(`/savedDecks/${mocks.testUserArray[2].email}`)
    const numDecks = beforeResult.body[0].savedDecks.length;
    let result = await request.post(`/savedDecks/${mocks.testUserArray[2].email}`)
      .send(mocks.testDeck)
      .expect(201)
    const userResult = await request.get(`/savedDecks/${mocks.testUserArray[2].email}`)
    expect(numDecks+1).toEqual(userResult.body[0].savedDecks.length);
    done();
  })

  it('should delete a saved deck by user email and deck id', async (done) => {
    const result = await request.get(`/savedDecks/${mocks.testUserArray[2].email}`);
    const firstDeckId = result.body[0].savedDecks[0]._id
    const deleteDeck = await request.delete(`/savedDecks/${mocks.testUserArray[2].email}-${firstDeckId}`)
    const resultArr = await request.get(`/savedDecks/${mocks.testUserArray[2].email}`);
    expect(resultArr.body[0].savedDecks.length).toEqual(result.body[0].savedDecks.length-1)
    done();
  })
})
