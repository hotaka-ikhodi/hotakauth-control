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
    editStatus: { data: {}, status: {} },
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
    editStatusUserRequest(state) {
      state.editStatus.status = {
        editing: true,
      };
    },
    editStatusUserError(state, error) {
      state.editStatus.data = null;
      state.editStatus.status = {
        error,
      };
    },
    editStatusUserSuccess(state, statusEditado) {
      state.editStatus.data = statusEditado;
      state.editStatus.status = {
        edited: true,
      };
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
    updateStatusUser({ commit }, userRequest) {
      commit('editStatusUserRequest');
      // eslint-disable-next-line no-underscore-dangle
      usuarioService.updateStatusUser(userRequest)
        .then((userRes) => {
          commit('editStatusUserSuccess', userRes);
        })
        .catch((error) => {
          commit('editStatusUserError', error);
        });
    },
  },
};