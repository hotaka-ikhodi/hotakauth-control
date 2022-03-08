import createAxios from './axiosHttp';

function login(user, password) {
  const axios = createAxios();
  return axios.post('/auth/login', { user, password }).then((userLogged) => {
    if (userLogged) {
      localStorage.setItem('user', JSON.stringify(userLogged));
    }
    return user;
  });
}

export const userService = {
  login,
};
