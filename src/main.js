
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routers';
import App from './App.vue';
import $ from 'vue-resource';

Vue.use(VueRouter);//转载插件
Vue.use($);//转载插件

Vue.config.silent = false;
Vue.config.devtools = true;

const route=new VueRouter({
    routes:router,
    base:__dirname,
    mode:'history'
});

new Vue({
    router:route,
    render:h=>h(App)
}).$mount('#app');



