import { createRouter,createWebHistory } from "vue-router";
import FirstPage from "@/components/FirstPage.vue";
import Login from "@/components/Login.vue";
import AdminDashboard from "@/components/AdminDashboard.vue";
// import { comma } from "postcss/lib/list";

const routes = [
    {
        path: '/',
        name:'Home',
        component:FirstPage
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
      path:'/admin-dashboard',
      name:'AdminDashboard',
      component:AdminDashboard
    },
    // {
    //     path:'/register',
    //     name:'Register',
    //     component:'Register'
    // }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router