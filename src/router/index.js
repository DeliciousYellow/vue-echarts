import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHelloWorld from "../components/MyHelloWorld"
import Echarts from "../components/Echarts"
import RequestUrl from "../components/RequestUrl"
import RequestView from "../components/RequestView"
import RequestName from "../components/RequestName"
import VisualView from "../components/VisualView"
import VisualTools from "../components/VisualTools"
 
Vue.use(VueRouter)
 
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index'
        },
        {
            path: '/index',
            name: 'index'
        },
        {
            path: '/request',
            name: "request",
            //需要提供一个给子组件挂载视图的组件
            component: RequestView,
            children:[
                {
                    path: 'Name',
                    name:"Request",
                    component: RequestName
                },
                {
                    path: 'Url',
                    name:"RequestUrl",
                    component: RequestUrl
                }
            ]
        },
        {
            path: '/Echarts',
            name: 'Echarts',
            component: VisualView
        }
    ]
})
 
export default router