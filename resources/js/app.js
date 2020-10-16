require('./bootstrap');

import router from './routes';
import VueRouter from "vue-router";
import Index from './index.vue';
import moment from 'moment'
import StarRating from './shared/components/StarRating.vue'

window.Vue = require('vue');

// Vue.component(
//     'example-component', 
//     require('./components/ExampleComponent.vue').default
// );

// Vue.component(
//     'example-component', 
//     require('./components/ExampleComponent.vue').default
// );


Vue.use(VueRouter);
Vue.filter("fromNow", value => moment(value).fromNow())
Vue.component('star-rating', StarRating);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index,
    }
});
