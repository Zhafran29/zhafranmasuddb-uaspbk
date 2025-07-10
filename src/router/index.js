import { createRouter, createWebHistory } from 'vue-router'

// Import semua komponen yang sudah dibuat
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Cart from '../components/Cart.vue'
import OrderHistory from '../components/OrderHistory.vue'
import Login from '../components/Login.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import ManageMenu from '../components/ManageMenu.vue'
import ManageOrders from '../components/ManageOrders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order-history',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      {
        path: 'menu-management',
        name: 'ManageMenu',
        component: ManageMenu
      },
      {
        path: 'order-management',
        name: 'ManageOrders',
        component: ManageOrders
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
