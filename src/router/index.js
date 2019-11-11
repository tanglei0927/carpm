import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path:'/',
        name:'car',
        component:()=> import('@/views/car/car.vue')
      },
      {
        path:'/addcar',
        name:'addcar',
        component:()=> import('@/views/car/addcar.vue'),
        children:[
          {
            path:"/addcarfl",
            name:'addcarfl',
            component:()=>import('@/views/car/addcarfl.vue')
          },
          {
            path:"/addcz",
            name:'addcz',
            component:()=>import('@/views/car/addcz.vue')
          }, {
            path:"/addcjinfo",
            name:'addcjinfo',
            component:()=>import('@/views/car/addcjinfo.vue')
          }, {
            path:"/addyaos",
            name:'addyaos',
            component:()=>import('@/views/car/addyaos.vue')
          },
        ]
      },
      {
        path:'/user',
        name:'user',
        component:()=> import('@/views/user/user.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'login',
    component: ()=> import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
