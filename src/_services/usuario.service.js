import createAxios from './axiosHttp';

function newUsuario(usuario) {
  const axios = createAxios();
  const urlPath = '/usuario';
  return axios.post(urlPath, usuario);
}

function getAllUsuarios() {
  const axios = createAxios();
  const urlPath = '/usuarios';
  return axios.get(urlPath);
}

export const usuarioService = {
  newUsuario,
  getAllUsuarios,
};