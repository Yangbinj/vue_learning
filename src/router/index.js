import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestEcharts from '@/components/TestEcharts'
import TestEchartsLine from '@/components/TestEchartsLine'
import TestEchartsLineTest from '@/components/TestEchartsLineTest'
import TestEchartsLineTestSon from '@/components/TestEchartsLineTestSon'
import capplse from '@/components/capplse'
import dynamicInfo from '@/components/enhanced/dynamicInfo.vue'
import parent from '@/components/enhanced/parent.vue'
import TestBus from '@/components/enhancedTest/TestBus.vue'
import InfoCard from '@/components/enhanced/InfoCard.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/InfoCard',
      name: 'InfoCard',
      component: InfoCard
    },
    {
      path: '/TestBus',
      name: 'TestBus',
      component: TestBus
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dynamicInfo',
      name: 'dynamicInfo',
      component: dynamicInfo
    },
    {
      path: '/capplse',
      name: 'capplse',
      component: capplse
    },
    {
      path: '/testEcharts',
      name: 'TestEcharts',
      component: TestEcharts
    },
    {
      path: '/TestEchartsLine',
      name: "TestEchartsLine",
      component: TestEchartsLine
    },
    {
      path: '/TestEchartsLineTest',
      name: "TestEchartsLineTest",
      component: TestEchartsLineTest
    },
    {
      path: '/TestEchartsLineTestSon',
      name: "TestEchartsLineTestSon",
      component: TestEchartsLineTestSon
    }
  ]
})
