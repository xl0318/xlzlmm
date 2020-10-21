import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'

const router = new vueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/layout', component: Layout },
        // 重定向
        {path:'/',redirect:'/login'}
    ]
})

export default router