import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegistrationPage from '../pages/RegistrationPage.vue'
import Forgotpsw from '../pages/Forgotpsw.vue'
import SessionNull from '../pages/SessionNull.vue'
import firstChat from '../components/firstChat.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:HomePage,
            children:[
                {
                    path:'SessionNull',
                    component:SessionNull
                },
                {
                    path:'/firstChat',
                    name:"firstChat",
                    component:firstChat,
                    query:{
                        required:false,
                        default:''
                    }
                },
            ]
        },
        {
            path:'/LoginPage',
            component:LoginPage,
        },
        {
            path:'/RegistrationPage',
            component:RegistrationPage,
        },
        {
            path:'/Forgotpsw',
            component:Forgotpsw,
        },
    ]
})