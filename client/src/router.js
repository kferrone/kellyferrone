import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Page1 from './pages/Page1.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 }
    
  ],
  linkExactActiveClass: "active"
});