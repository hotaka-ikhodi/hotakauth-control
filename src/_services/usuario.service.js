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

function updateStatusUser(usuario) {
  const axios = createAxios();
  const urlPath = `/user/${usuario.iduser}`;
  return axios.put(urlPath, usuario);
}

export const usuarioService = {
  newUsuario,
  getAllUsuarios,
  updateStatusUser,
};