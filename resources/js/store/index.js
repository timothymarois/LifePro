import Vue from 'vue';
import Vuex from 'vuex';
import Moods from './modules/moods';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Moods
    },
    strict: '',
    plugins: []
});
