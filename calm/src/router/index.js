import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import QuestionnaireView from '../views/QuestionnaireView.vue'
import ResultsView from '../views/ResultsView.vue'
import ProfissoesView from '../views/ProfissoesView.vue'
import ProfissaoDetalheView from '../views/ProfissaoDetalheView.vue'
import PuzzleView from '../views/PuzzleView.vue'
import SobreView from '../views/SobreView.vue'

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
  {
    path: '/profissoes/:id',
    name: 'profissao-detalhe',
    component: ProfissaoDetalheView,
  },
  {
    path: '/puzzle',
    name: 'puzzle',
    component: PuzzleView,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: SobreView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  // Mantém a posição ao voltar e permite navegar até uma seção por hash.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 16 }
    return { top: 0, left: 0 }
  },
})

export default router
