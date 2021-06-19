import randomWait from '../utils/randomWait';
// Fake API

const usersData = [
  {
    login: 'siran',
    password: '123',
    firstName: 'Kirill',
    lastName: 'Gerasimenko',
    age: 19,
    country: 'Belarus'
  }
];

class AuthAPI {
  async login(login, password) {
    const user = {...usersData.find(data => data.login === login && data.password === password)} || {};
    delete user.password;
    return await randomWait(() => user);
  }
}

const authAPI = new AuthAPI();
export default authAPI;