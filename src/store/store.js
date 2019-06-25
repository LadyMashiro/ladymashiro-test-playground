import Vuex from 'vuex'
import Vue from 'vue'
import data from '../data/data';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    headerFooter: data.headerFooter,
    klinikFilter: data.klinikFilter,
    kliniken: data.kliniken,
    options: data.options
  },
  getters: {
    filteredHeaderFooter: state => {
      if (state.klinikFilter.length > 0) {
        return state.headerFooter.filter(item => item.klinik === state.klinikFilter);
      }
      return state.headerFooter;
    }
  },
  actions: {
    setKlinikFilter (context, value) {
      context.commit('SET_KLINIK_FILTER', value);
    }
  },
  mutations: {
    SET_KLINIK_FILTER(state, value) {
      state.klinikFilter = value;
    }
  }
});
