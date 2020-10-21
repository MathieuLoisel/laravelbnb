require('./bootstrap');

import router from './routes';
import VueRouter from "vue-router";
import Vuex from 'vuex'
import Index from './index.vue';
import moment from 'moment'
import StarRating from './shared/components/StarRating.vue'
import FatalError from './shared/components/FatalError.vue'
import ValidationErrors from './shared/components/ValidationErrors.vue'
import Success from './shared/components/Success.vue'
import storeDefinition from './store'
import Check from './shared/components/Check.vue'

window.Vue = require('vue');

// Vue.component(
//     'example-component', 
//     require('./components/ExampleComponent.vue').default
// );

// Vue.component(
//     'example-component', 
//     require('./components/ExampleComponent.vue').default
// );

//moment.locale("fr");

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.filter("fromNow", value => moment(value).fromNow());
Vue.component('star-rating', StarRating);
Vue.component('fatal-error', FatalError);
Vue.component('v-errors', ValidationErrors);
Vue.component('success', Success);
Vue.component('check', Check);

const store = new Vuex.Store(storeDefinition);

window.axios.interceptors.response.use(
    //response => response, 
    response => {
        return response;
    }
    error => {
        if (401 === error.response.status) {
            store.dispatch('logout');
        }

        return Promise.reject(error);
    }
);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        "index": Index,
    },
    async beforeCreate(){
        this.$store.dispatch('loadStoredState');
        this.$store.dispatch('loadUser');
    }
});