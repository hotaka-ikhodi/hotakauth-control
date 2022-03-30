import { usuarioService } from '@/_services';

export const usuario = {
  namespaced: true,
  state: {
    list: {
      data: {},
      status: {
      },
    },
    new: { data: {}, status: {} },
  },
  mutations: {
    getAllUsuariosRequest(state) {
      state.list.status = { loading: true };
    },
    getAllUsuariosError(state, error) {
      state.list.data = {};
      state.list.status = { error };
    },
    getAllUsuariosSuccess(state, usuario) {
      state.list.data = usuario;
      state.list.status = { loaded: true };
    },
    newUsuarioRequest(state) {
      state.new.status = { creating: true };
    },
    newUsuarioError(state, error) {
      state.new.data = {};
      state.new.status = { error };
    },
    newUsuarioSuccess(state, usuario) {
      state.new.data = usuario;
      state.new.status = { created: true };
    },
  },
  actions: {
    getAllUsuarios({ commit }, filters) {
      commit('getAllUsuariosRequest');
      usuarioService
        .getAllUsuarios(filters)
        .then((usuarios) => {
          commit('getAllUsuariosSuccess', usuarios);
        })
        .catch((error) => {
          commit('getAllUsuariosError', error);
        });
    },
    newUsuario({ commit }, req) {
      commit('newUsuarioRequest');
      usuarioService.newUsuario(req)
        .then((usuario) => {
          commit('newUsuarioSuccess', usuario);
        })
        .catch((error) => {
          commit('newUsuarioError', error);
        });
    },
  },
};