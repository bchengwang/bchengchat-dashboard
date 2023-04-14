import Vue from 'vue'
import App from './App.vue'
import { Tabs,TabPane,Header,Container,Main,Footer } from 'element-ui';

Vue.config.productionTip = false

Vue.component("el-tabs",Tabs)
Vue.component("el-tab-pane",TabPane)
Vue.component("el-container",Container)
Vue.component("el-header",Header)
Vue.component("el-main",Main)
Vue.component("el-footer",Footer)

new Vue({
	el:'#app',
	render: h => h(App),
})
