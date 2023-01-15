import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import PersonalInfoView from '../views/PersonalInfoView.vue'
import SelectPlanView from '../views/SelectPlanView.vue'
import MoreInfoView from '../views/MoreInfoView.vue'
import SummaryView from '../views/SummaryView.vue'

const routes = [
  {
    path: '/',
    component: PersonalInfoView,
    name: 'default',
  },
  {
    path: '/user-info',
    component: PersonalInfoView,
    name: 'user-info',
  },
  {
    path: '/select-plan',
    component: SelectPlanView,
    name: 'stepTwo',
  },
  {
    path: '/more-info',
    component: MoreInfoView,
    name: 'stepThree',
  },
  {
    path: '/summary-info',
    component: SummaryView,
    name: 'stepfour',
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
