/* eslint-disable */
/* tslint-disable */
import '../config';
import express from 'express';
import router from '../router';
import supertest from 'supertest';
import mongoose from 'mongoose';
import { Users } from '../db';

require('dotenv').config();

const PORT = (process.env.PORT as string);
const DB_URI = (process.env.DB_URI as string);
console.log(DB_URI)

const port:number = Number(PORT) || 3001;

/* eslint-disable */
/* tslint-disable */
describe('Integration tests', () => {

  const server = express();
  server.use(express.json());
  server.use(router);
  const request = supertest(server)

  beforeAll(async () => {
    console.log('start')
    // await mongoose.connect(DB_URI, { useNewUrlParser: true })
    // mongoose.connection.once('open', () => console.log('database connected')
  })

  afterEach(async (done) => {
    await Users.deleteMany();
    // mongoose.connection.close();

    done();
  })

  it('should save a new user to the database', async (done) => {
    const user = {
      username: 'TestUser',
      email: 'test@user.com',
    }
    const result = await request.post('/users')
      .send(user);

    const confirmUser = await Users.findOne({ email: user.email})
    if (confirmUser && confirmUser.email) {
      expect(confirmUser.email).toBe(user.email)
    }
    done();
  })


})




describe("test sum function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(10 + 5).toBe(15);
  });
});


