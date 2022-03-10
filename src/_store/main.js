import Vue from 'vue';
import Vuex from 'vuex';

import {prueba} from './prueba.module'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    prueba
  }
})