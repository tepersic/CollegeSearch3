import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import auth from '../middleware/auth';


Vue.use(VueRouter)


const routes = [
  {
    path: '/',        
    name: 'home',
    component: Home
  },
  {
    path: '/login',    
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',    
    name: 'signup',
    component: () => import( '../views/Signup.vue')
  },
  {
    path: '/card',     
    name: 'card',
    component: () => import('../views/Card.vue'),
    meta: {
    }
  },
  {
    path: '/like',     
    name: 'like',
    component: () => import('../views/Like.vue'),
    meta: {
    }
  },
  {
    path : '/college/:college_id?',   
    name : 'college',
    component: () => import('../views/College.vue'),
    meta: {
      // middleware: [auth],
    }
  }
]

//  =========  ================ ========= //

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    
    context.next(...parameters);
    
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
