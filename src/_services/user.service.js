import createAxios from './axiosHttp';

export const userService = {
  login, changePassword
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
function changePassword(body) {
  const axios = createAxios();
  const urlPath = '/auth/password';
  return axios.put(urlPath, body);
}

