/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Users } from '../db';
import { User } from '../interfaces';

async function postOne(body: any) {
  const res: User = await Users.create(body);
  return res.email;
}

// eslint-disable-next-line no-unused-vars
async function getOne(email: string) : Promise<Array<User>> {
  const one: Array<User> = await Users.find({ email });
  return one;
}

async function deleteAll() : Promise<any> {
  const deleted: any = await Users.deleteMany();
  return deleted;
}

export { postOne, getOne, deleteAll };
