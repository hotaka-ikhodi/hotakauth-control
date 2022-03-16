import { tokenService } from '@/_services';

export const token = {
  namespaced: true,
  state: {
    list: {
      data: {},
      status: {
      },
    },
  },
  mutations: {
    getAllTokensRequest(state) {
      state.list.status = { loading: true };
    },
    getAllTokensError(state, error) {
      state.list.data = {};
      state.list.status = { error };
    },
    getAllTokensSuccess(state, usuario) {
      state.list.data = usuario;
      state.list.status = { loaded: true };
    },
  },
  actions: {
    getAllTokens({ commit }, req) {
      commit('getAllTokensRequest');
      tokenService
        .getAllUsuarios(req)
        .then((tokens) => {
          commit('getAllTokensSuccess', tokens);
        })
        .catch((error) => {
          commit('getAllTokensError', error);
        });
    },
  },
};