import Vue from 'vue'
import VueRouter from 'vue-router'
import addressBook from '../view/AddressBook.vue'
import Login from '../view/Login.vue'
import Main from '../view/Main.vue'
import personalCenter from "@/view/PersonalCenter.vue";
import addInform from "@/view/Addinform.vue";
Vue.use(VueRouter)

const routes = [
    //主路由
    {
        path: '/Main',
        component: Main,
        redirect: 'AddressBook',
        children: [
            { path: '/AddressBook', component: addressBook },
            { path: '/AddInform', component: addInform },
            { path: '/PersonalCenter', component: personalCenter },
        ]
    },

    { path: '/login', component: Login },
    { path: "/", redirect:"/login" }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

 export default router

