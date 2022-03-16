import Vue from 'vue';
import Vuex from 'vuex';

import {user} from './user.module'
import {usuario} from './usuario.module'
import {token} from './token.module'


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    user,
    usuario,
    token,
  }
})