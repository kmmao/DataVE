import Vue from 'vue';
import Router from 'vue-router';
import Section from '../components/content/Section.vue';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/loginAdmin/',
  routes: [
    {
      path: '/',
      name: 'Section',
      component: Section
    },
    // {
    //   path: '/second',
    //   name: 'secondIndex',
    //   component: secondIndex,
    //   redirect: '/Index',//设置默认指向的路径
    //   children: [ //这里就是二级路由的配置
    //     {
    //       path: '/talent',
    //       name: 'TalentMain',
    //       component: TalentMain
    //     }
    //   ]
    // },
  ]
})
