import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui';
import AudioVisual from 'vue-audio-visual'
import Contextmenu from 'vue-contextmenujs';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(AudioVisual);
Vue.use(Contextmenu);
Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false;

const Demo = Vue.extend({});
const d = new Demo();
Vue.prototype.x = d;

new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
