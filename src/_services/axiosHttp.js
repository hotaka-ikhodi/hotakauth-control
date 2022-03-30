import {
  apiServer
} from '../globalVars';

const axios = require('axios').default;

function createAxios() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));
  const headers = {
    "Access-Control-Allow-Origin": "*"
  };

  if (user && user.token) {
    headers.authorization = user.token;
  }

  const instance = axios.create({
    baseURL: apiServer,
    headers,
  });

  instance.interceptors.response.use((response) => Promise.resolve(response.data),
    (error) => {
      if ([403].includes(error.response.data.error.status)) {
        localStorage.removeItem('user');
        localStorage.removeItem('empleado');
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }
      return Promise.reject(error.response.data);
    });

  return instance;
}

export default createAxios;