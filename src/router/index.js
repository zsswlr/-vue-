import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//
// import One from '../components/one'
// import Two from '../components/two'
// import Three from '../components/three'


const One = () => import('../components/one')
const Two = () => import('../components/two')
const Three = () => import('../components/three')

// const One = () => import(/* webpackChunkName: "one" */ '../components/one')
// const Two = () => import(/* webpackChunkName: "two" */ '../components/two')
// const Three = () => import(/* webpackChunkName: "three" */ '../components/three')

Vue.use(Router)

const router =new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'One',
      component: One,
      beforeEnter: (to, from, next) => {
        // ...
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    }
  ]
})
router.beforeEach ((to, from, next) => {
  // ...
  console.log(to)
  console.log(from)
  next()
})
router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
  // ...
})
export default  router




