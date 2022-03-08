import { userService } from '@/_services';

const user = {
  namespaced: true,
  state: {
    entity: {
      data: {},
      status: {
      },
    },
  },
  mutations: {
    loginUserRequest(state) {
      state.entity.status = { logging: true };
    },
    loginUserError(state, error) {
      state.entity.data = {};
      state.entity.status = { error };
    },
    loginUserSuccess(state, usuario) {
      state.entity.data = usuario;
      state.entity.status = { logged: true };
    },
  },
  actions: {
    login({ commit }, req) {
      commit('loginUserRequest');
      userService.login(req.email, req.password)
        .then((res) => { commit('loginUserSuccess', res); })
        .catch((error) => { commit('loginUserError', error); });
    },
  },
};

export default user;
