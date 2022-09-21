import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/room',
    name: 'room',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RoomView.vue'),
    children:[
      {
        path: 'single',
        name: 'single',
        component: () => import('../views/SingleRoom.vue'),
      },
      {
        path: 'deluxesingle',
        name: 'deluxesingle',
        component: () => import('../views/DuluxeSingleRoom.vue'),
      },
      {
        path: 'double',
        name: 'double',
        component: () => import('../views/DoubleRoom.vue'),
      },
      {
        path: 'deluxedouble',
        name: 'deluxedouble',
        component: () => import('../views/DeluxeDoubleRoom.vue'),
        children:[
          {
            path: 'CommentReview',
            name: 'CommentReview',
            component: () => import('../components/CommentReview.vue'),
          }
          ,{ 
          path: 'comment',
          name: 'comment',
          component: () => import('../components/Comment.vue'),
        }],
      },
      {
        path: 'twin',
        name: 'twin',
        component: () => import('../views/TwinRoom.vue'),
      },
      {
        path: 'deluxetwin',
        name: 'deluxetwin',
        component: () => import('../views/DeluxeTwinRoom.vue'),
      }
    ],
  },
  {
    path:'/checkout',
    component: () => import('../views/Checkout.vue'),
    children:[
      {
        path: 'ReserveMaterial',
        component: () => import('../views/ReserveMaterial.vue'),
      },
      {
        path: 'checkmaterial',
        component: () => import('../views/CheckMaterial.vue'),
      }
    ]
  },
  {
    path:'/backlogin',
    component: () => import('../views/back/Login.vue'),
  },
  {
    path:'/dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    children:[{
      path:'products',
      component: () => import('../views/back/Products.vue') 
    }]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
