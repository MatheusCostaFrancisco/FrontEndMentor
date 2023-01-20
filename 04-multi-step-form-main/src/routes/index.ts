import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import PersonalInfoView from '../views/PersonalInfoView.vue'
import SelectPlanView from '../views/SelectPlanView.vue'
import MoreInfoView from '../views/MoreInfoView.vue'
import SummaryView from '../views/SummaryView.vue'
import SuccessView from '../views/SuccessView.vue'

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
    name: 'select-plan',
  },
  {
    path: '/more-info',
    component: MoreInfoView,
    name: 'more-info',
  },
  {
    path: '/summary-info',
    component: SummaryView,
    name: 'summary-info',
  },
  {
    path: '/success',
    component: SuccessView,
    name: 'success',
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
