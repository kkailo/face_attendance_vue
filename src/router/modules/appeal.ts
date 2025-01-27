import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/appeal',
    component: Layout,
    redirect: '/appeal/manage',
    meta: { title: '员工管理', icon: 'sfont system-document' },
    children: [
      {
        path: 'manage',
        component: createNameComponent(() => import('@/views/main/appeal/manage.vue')),
        meta: { title: '申诉管理' }
      },
    ]
  }
]

export default route