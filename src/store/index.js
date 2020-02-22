import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from "./info";
import infoRecord from "./record-info";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        error: null
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
      async fetchCurrency() {
        const res = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        return await res.json();
      }
    },
    getters: {
        error: $ => $.error
    },
    modules: {
        auth, info, infoRecord
    }
})
