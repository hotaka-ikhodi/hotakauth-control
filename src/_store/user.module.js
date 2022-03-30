import { userService } from '@/_services';

export const user = {
  namespaced: true,
  state: {
    entity: {
      data: {},
      status: {
      },
    },
    editPass: { data: {}, status: {} },
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
    changePasswordRequest(state) {
      state.editPass.status = { editing: true };
    },
    changePasswordError(state, error) {
      state.editPass.data = {};
      state.editPass.status = { error };
    },
    changePasswordSuccess(state, usuario) {
      state.editPass.data = usuario;
      state.editPass.status = { edited: true };
    },
  },
  actions: {
    login({ commit }, req) {
      commit('loginUserRequest');
      userService.login(req.user, req.password)
        .then((res) => { commit('loginUserSuccess', res); })
        .catch((error) => { commit('loginUserError', error); });
    },
    changePassword({ commit }, body) {
      commit('changePasswordRequest');
      userService.changePassword(body)
        .then((res) => { commit('changePasswordSuccess', res); })
        .catch((error) => { commit('changePasswordError', error); });
    },
  },
};