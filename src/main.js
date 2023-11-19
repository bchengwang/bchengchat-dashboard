import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const Demo = Vue.extend({});
const d = new Demo();
Vue.prototype.x = d;

new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
