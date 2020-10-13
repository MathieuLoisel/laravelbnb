require('./bootstrap');

import router from './routes';
import VueRouter from "vue-router";
import Index from './index.vue';

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

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index,
    }
});
