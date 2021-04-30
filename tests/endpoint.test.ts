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
    console.log('here')
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

describe('Decks & cards endpoint testing', () => {
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

  // create a deck
  // get all decks for a user
  // get all saved decks for a user
  // save one deck to a user

  it('should add a newly created deck to a user\'s profile', async (done) => {
    let result = await request.post(`/myDecks/${mocks.testUserArray[0].email}`)
      .send(mocks.testDeck)
      .then((res) => res.body)


    // const secondResult = await request.post(`/myDecks/${mocks.testUserArray[1].email}`)
    //   .send(mocks.testDeck)
    // const fullDecks = mocks.testUserArray[1].myDecks.concat(mocks.testDeck)

    const firstUser = await Users.findOne({ email: mocks.testUserArray[0].email}, { myDecks: true, })
    if (firstUser && firstUser.myDecks[0]) {
      expect(firstUser.myDecks[0].title).toEqual(result.myDecks[0].title)
    } else fail('User not found.')

    // const secondUser = await Users.findOne({ email: mocks.testUserArray[1].email})
    // if (secondUser && secondUser.myDecks) {
    //   expect(secondUser.myDecks).toBe(fullDecks)
    // } else fail('User not found.')

    done();

  })

  // it('should get a user\'s profile information', async (done) => {

  //   const result = await request.get(`/users/${mocks.testUser.email}`)
  //   const userProfile = result.body[0]
  //   expect(userProfile.email).toBe(mocks.testUser.email);
  //   done();
  // })



})
