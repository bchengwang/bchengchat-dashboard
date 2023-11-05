import Vue from 'vue'
import App from './App.vue'
import { Tabs,TabPane,Header,Container,Main,Footer,Tooltip,Button,Dialog,Row,Col,Dropdown,DropdownMenu,DropdownItem,Drawer,Upload,Checkbox,Switch,Carousel,CarouselItem } from 'element-ui';
import VueRouter from 'vue-router'
import router from './router/index'
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component("el-tabs",Tabs)
Vue.component("el-tab-pane",TabPane)
Vue.component("el-container",Container)
Vue.component("el-header",Header)
Vue.component("el-main",Main)
Vue.component("el-footer",Footer)
Vue.component("el-button",Button)
Vue.component("el-tooltip",Tooltip)
Vue.component("el-dialog",Dialog)
Vue.component("el-row",Row)
Vue.component("el-col",Col)
Vue.component("el-dropdown",Dropdown)
Vue.component("el-dropdown-menu",DropdownMenu)
Vue.component("el-dropdown-item",DropdownItem)
Vue.component("el-drawer",Drawer)
Vue.component("el-upload",Upload)
Vue.component("el-checkbox",Checkbox)
Vue.component("el-switch",Switch)
Vue.component("el-carousel",Carousel)
Vue.component("el-carousel-item",CarouselItem)


new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
