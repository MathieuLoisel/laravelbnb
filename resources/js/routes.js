import VueRouter from "vue-router";
import ExampleComponent from './components/ExampleComponent.vue'
import SecondComponent from './components/Example2.vue'

const routes = [
    {
        path: "/",
        component: ExampleComponent, 
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