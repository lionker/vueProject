/*
功能：包含所有路由的数组
*/

import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'

export default [
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/search',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/miste'
  },
]