// imports always go first at the top
import splashPage from "./modules/splashPage.js";
import appPage from "./modules/appPage.js";
import errorPage from "./modules/errorPage.js";


const router = new VueRouter({ // when we loud our site - we hit this first
    routes: [
        { path: '/', name: "splash", component: splashPage }, // will bring back this component  - will be rendered in html
        { path: '/app', name: "app", component: appPage },
        { path: '*', name: "error", component: errorPage}
    ]
})

const vm = new Vue({
    data: {

    },

    created: function() {
        console.log('app is running');
    },

    methods: {

    },

    router // shorthand for router: router
}).$mount("#app");