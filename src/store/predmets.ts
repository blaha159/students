// @ts-ignore
import Cookies from 'js-cookie'

import { createNamespacedHelpers } from 'vuex';
import { DefineActions, DefineGetters, DefineMutations } from 'vuex-type-helper';

import { Predmet, PredmetService } from '~/service/studentsBack'
//import IHash from '~/types/IHash.ts'

export interface State {
  predmetList: Predmet[]
}

export interface Actions {
  getPredmetList: void
}

export interface Mutations {
  setPredmetList: Predmet[]
}
export interface Getters {
}

export function state() {

  let state: State;

  state = {
    predmetList: [],
  };

  return state;
}

export const getters: DefineGetters<Getters, State> = {
};

export const actions: DefineActions<Actions, State, Mutations, Getters> = {

  async getPredmetList({commit}) {
    const response = await PredmetService.getAll();
    commit('setPredmetList', response);
  },

};

export const mutations: DefineMutations<Mutations, State> = {

  setPredmetList(state: State, predmetList: Predmet[]) {
    state.predmetList = predmetList;
  },

};

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('products');


export const products = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
