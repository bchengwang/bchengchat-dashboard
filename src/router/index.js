import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegistrationPage from '../pages/RegistrationPage.vue'
import Forgotpsw from '../pages/Forgotpsw.vue'
import SessionNull from '../pages/SessionNull.vue'
import firstChat from '../pages/firstChat.vue'
import secondChat from '../pages/secondChat.vue'
import thirdlyChat from '../pages/thirdlyChat.vue'
import fourthlyChat from '../pages/fourthlyChat.vue'
import fifthChat from '../pages/fifthChat.vue'
import sixthChat from '../pages/sixthChat.vue'
import seventhChat from '../pages/seventhChat.vue'
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
                    path:'firstChat',
                    component:firstChat
                },
                {
                    path:'secondChat',
                    component:secondChat
                },
                {
                    path:'thirdlyChat',
                    component:thirdlyChat
                },
                {
                    path:'fourthlyChat',
                    component:fourthlyChat
                },
                {
                    path:'fifthChat',
                    component:fifthChat
                },
                {
                    path:'sixthChat',
                    component:sixthChat
                },
                {
                    path:'seventhChat',
                    component:seventhChat
                }
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