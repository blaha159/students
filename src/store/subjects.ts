// @ts-ignore
import Cookies from 'js-cookie'

import { createNamespacedHelpers } from 'vuex';
import { DefineActions, DefineGetters, DefineMutations } from 'vuex-type-helper';

import { Predmet, PredmetService } from '~/service/studentsBack'
//import IHash from '~/types/IHash.ts'

export interface State {
  subjectList: Predmet[]
}

export interface Actions {
  getSubjectList: void
}

export interface Mutations {
  setSubjectList: Predmet[]
}
export interface Getters {
}

export function state() {

  let state: State;

  state = {
    subjectList: [],
  };

  return state;
}

export const getters: DefineGetters<Getters, State> = {
};

export const actions: DefineActions<Actions, State, Mutations, Getters> = {

  async getSubjectList({commit}) {
    const response = await PredmetService.getAll();
    commit('setSubjectList', response);
  },

};

export const mutations: DefineMutations<Mutations, State> = {

  setSubjectList(state: State, subjectList: Predmet[]) {
    state.subjectList = subjectList;
  },

};

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('subjects');


export const products = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
