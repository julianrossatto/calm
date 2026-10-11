import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import QuestionnaireView from '../views/QuestionnaireView.vue'
import ResultsView from '../views/ResultsView.vue'
import ProfissoesView from '../views/ProfissoesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/questionario',
    name: 'questionnaire',
    component: QuestionnaireView,
  },
  {
    path: '/resultados',
    name: 'results',
    component: ResultsView,
  },
  {
    path: '/profissoes',
    name: 'profissoes',
    component: ProfissoesView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
