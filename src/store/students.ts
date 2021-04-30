// @ts-ignore
import Cookies from 'js-cookie'

import { createNamespacedHelpers } from 'vuex';
import { DefineActions, DefineGetters, DefineMutations } from 'vuex-type-helper';

import { WeatherForecast, WeatherForecastService } from '~/service/studentsBack'
//import IHash from '~/types/IHash.ts'

export interface State {
  weatherForecastList: WeatherForecast[]
}

export interface Actions {
  getWeatherForecastList: void
}

export interface Mutations {
  setWeatherForecastList: WeatherForecast[]
}
export interface Getters {
}

export function state() {

  let state: State;

  state = {
    weatherForecastList: [],
  };

  return state;
}

export const getters: DefineGetters<Getters, State> = {
};

export const actions: DefineActions<Actions, State, Mutations, Getters> = {

  async getWeatherForecastList({commit}) {
    const response = await WeatherForecastService.getWeatherForecast();
    commit('setWeatherForecastList', response);
  },

};

export const mutations: DefineMutations<Mutations, State> = {

  setWeatherForecastList(state: State, weatherForecastList: WeatherForecast[]) {
    state.weatherForecastList = weatherForecastList;
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
