import Shell from '@/layouts/Shell.vue'
import ExampleModule from '../views/ExampleModule.vue'
 
const routes = [
    {
        path: '/',
        name: 'LayoutModule',
        component: Shell,
        children: [
        {
            path: '/example',
            name: 'ExampleModule',
            component: ExampleModule,
            meta: {
                requiresAuth: false
            }
        }]
    }
]

export default routes