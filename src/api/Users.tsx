import axios from 'axios';
import {User} from './types';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export async function fetchUser(name: string) {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    console.log('name: ', name, 'response: ', response.data);
    const user = response.data.find((user: User) => user.name === name);
    return user;
  } catch (e) {
    console.error(e);
  }
  return undefined;
}
