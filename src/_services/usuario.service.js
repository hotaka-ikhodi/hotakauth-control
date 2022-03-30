import createAxios from './axiosHttp';

function newUsuario(usuario) {
  const axios = createAxios();
  const urlPath = '/user';
  return axios.post(urlPath, usuario);
}

function getAllUsuarios(filters) {
  const axios = createAxios();
  let urlPath = '/allUsers';
  if (filters && filters.name) {
    urlPath += `?name=${filters.name}`;
  }
  return axios.get(urlPath);
}

export const usuarioService = {
  newUsuario,
  getAllUsuarios,
};