import dataStorage from '../../api/mockdata';

// initial state
const state = {
    actions : {

    },
    effects : {

    }
}

// getters
const getters = {
    
}

// actions
const actions = {
    getActions ({ commit }) {
        dataStorage.getActions(actions => {
            commit('setActions', actions)
        });
    },
    getEffects ({ commit }) {
        dataStorage.getEffects(effects => {
            commit('setEffects', effects)
        });
    }
}

// mutations
const mutations = {
    setActions (state, actions) {
        state.actions = actions
    },
    setEffects (state, effects) {
        state.effects = effects
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
} 
