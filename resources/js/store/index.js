import Vue from 'vue';
import Vuex from 'vuex';
import Moods from './modules/moods';
import Datapoints from './modules/datapoints';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Moods,
        Datapoints
    },
    strict: '',
    plugins: []
});
