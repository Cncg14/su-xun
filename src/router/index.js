import Vue from 'vue'
import VueRouter from 'vue-router'
import addressBook from '../view/AddressBook.vue'
import Login from '../view/Login.vue'
import Main from '../view/Main.vue'
import personalCenter from "@/view/PersonalCenter.vue";
import addInform from "@/view/Addinform.vue";
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    //主路由
    {
        path: '/Main',
        component: Main,
        redirect: 'AddressBook',
        children: [
            { path: '/AddressBook', component: addressBook ,name: 'addressBook'},
            { path: '/AddInform', component: addInform ,name: 'addInform'},
            { path: '/PersonalCenter', component: personalCenter ,name: 'personalCenter' ,props:{username:'username'}},
        ]
    },

    { path: '/login', component: Login },
    { path: "/", redirect:"/login" }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

 export default router

