import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import One from '../components/one'
// import Two from '../components/two'
// import Three from '../components/three'


// const One = () => import(/* webpackChunkName: 'one' */'../components/one')
// const Two = () => import(/* webpackChunkName: 'two' */'../components/two')
// const Three = () => import(/* webpackChunkName: 'three' */'../components/three')
// const One = () => import(/* webpackChunkName: "one" */ '../components/one')
// const Two = () => import(/* webpackChunkName: "two" */ '../components/two')
// const Three = () => import(/* webpackChunkName: "three" */ '../components/three')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'One',
      component:resolve => require(['@/components/one'],resolve)
    },
    {
      path: '/two',
      name: 'Two',
      component: resolve => require(['@/components/two'],resolve)
    },
    {
      path: '/three',
      name: 'Three',
      component: resolve => require(['@/components/three'],resolve)
    }
  ]
})
