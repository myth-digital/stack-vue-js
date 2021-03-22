import Shell from '../../../layouts/Shell.vue';
import ExampleModule from '../views/ExampleModule.vue';

export default [
  {
    path: '/example',
    component: Shell,
    children: [
      {
        path: '/',
        name: 'example',
        component: ExampleModule,
        title: 'Example'
      }
    ]
  }
];
