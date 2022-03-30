import createAxios from './axiosHttp';

export const userService = {
  login,
};

function login(user, password) {
  const axios = createAxios();
  return axios.post('/login', { user, password }).then((userLogged) => {
    if (userLogged) {
      localStorage.setItem('user', JSON.stringify(userLogged));
    }
    return user;
  });
}

