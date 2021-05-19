import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Proyectos from '../views/Proyectos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/proyectos',
    name: 'Proyectos',
    component: Proyectos
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

export default router
