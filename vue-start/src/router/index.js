import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import About from '@/components/About'
import Product from '@/components/Product'
import Docs from '@/components/Docs'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
