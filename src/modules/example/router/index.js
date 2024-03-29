import Main from '@/layouts/Main.vue'
import ExampleModule from '../views/ExampleModule.vue'
 
const routes = [
    {
        path: '/',
        name: 'LayoutModule',
        component: Main,
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