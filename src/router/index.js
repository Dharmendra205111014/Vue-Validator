/*
 * @Author: dharmendra.patel26@gmail.com 
 * @Date: 2018-02-04 17:59:14 
 * @Last Modified by: dharmendra.patel26@gmail.com
 * @Last Modified time: 2018-02-04 18:12:49
 */

import Vue from 'vue';
import Router from 'vue-router';
import TestForm from '@/components/TestForm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestForm',
      component: TestForm,
    }
  ],
});
