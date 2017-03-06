import Vue from 'vue'
import Router from 'vue-router'

import Login from 'views/Login'
import Check from 'views/Check'
import Library from 'views/Library'
import LibraryDetail from 'views/LibraryDetail'
import News from 'views/News'
import NewsDetail from 'views/NewsDetail'
import Me from 'views/Me'
import Score from 'views/Score'
import Table from 'views/Table'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/check',
      component:Check
    },
    {
      path:'/table',
      component:Table
    },
    {
      path:'/library',
      component:Library
    },
    {
      path:'/libraryDetail',
      name:'libraryDetail',
      component:LibraryDetail
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/newsDetail:NewsRd',
      name:'newsDetail',
      component:NewsDetail
    },
    {
      path:'/me',
      name:'me',
      component:Me
    },
    {
      path:'/score',
      name:'score',
      component:Score
    },

    ]
})
