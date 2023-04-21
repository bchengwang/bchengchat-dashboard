import Vue from 'vue'
import VueRouter from 'vue-router'
import Left from "../components/Left";
import DengLu from "@/components/DengLu";

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:"/Left",
            component:Left
        },
        {
            path:"/DengLu",
            component:DengLu
        }
    ]
})
