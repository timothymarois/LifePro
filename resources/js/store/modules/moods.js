// initial state
const state = {
    mood: 0
}

// getters
const getters = {
    getMood: (state) => {
        return state.mood;
    }
}

// actions
const actions = {
    setMood ({ commit, state }, mood) {
        if (state.mood == mood) {
            commit('setMoodStatus', 0);
        }
        else {
            commit('setMoodStatus', mood);
        }
    },
    getSavedMood ({ commit }) {
        commit('setMoodStatus', 0);
    },
}

// mutations
const mutations = {
    setMoodStatus (state, status) {
        state.mood = status;
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
