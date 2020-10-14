import VueRouter from "vue-router";
import Bookables from './bookables/Bookables.vue'
import SecondComponent from './components/Example2.vue'

const routes = [
    {
        path: "/",
        component: Bookables, 
        name: "home"
    },
    {
        path: "/second",
        component: SecondComponent, 
        name: "second"
    }
];

const router = new VueRouter({
    mode: 'history',
    routes, //short for 'routes: routes'
});

export default router;