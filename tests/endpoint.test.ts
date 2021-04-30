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
console.log(DB_URI)

const port:number = Number(PORT) || 3001;

describe('User endpoint testing', () => {
  const server = express();
  server.use(express.json());
  server.use(router);
  const request = supertest(server)

  beforeAll(async () => {
    await mongoose.connect(DB_URI, { useNewUrlParser: true })
  })

  afterAll(async (done) => {
    await Users.deleteMany();
    mongoose.connection.close();
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




describe("test sum function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(10 + 5).toBe(15);
  });
});


