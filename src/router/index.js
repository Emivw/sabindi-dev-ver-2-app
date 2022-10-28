import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/LoginForm.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SignupForm.vue')
  },
  {
    path: '/crm',
    name: 'crm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/CRMPannel.vue')
  },
  {
    path: '/po',
    name: 'po',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/POView.vue')
  },
  {
    path: '/wo',
    name: 'wo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/WOView.vue')
  },
  {
    path: '/quotes',
    name: 'quotes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/QuotesView.vue')
  },
  {
    path: '/materials',
    name: 'materials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/MaterialsView.vue')
  },
  {
    path: '/inventory',
    name: 'inventory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/InventoryView.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/ReportsView.vue')
  },
  {
    path: '/costs',
    name: 'costs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/CostsView.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/dar',
    name: 'dar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
component: () => import(/* webpackChunkName: "about" */ '../views/DARPannel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
