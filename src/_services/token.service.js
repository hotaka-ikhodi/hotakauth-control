import createAxios from './axiosHttp';

function getAllTokens() {
  const axios = createAxios();
  const urlPath = '/tokens';
  return axios.get(urlPath);
}

export const tokenService = {
  getAllTokens,
};