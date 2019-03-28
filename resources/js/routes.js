import Main from './layouts/main';
import Dashboard from './pages/dashboard';
import Insights from './pages/insights';

const Err404 = {
  template: '<div>404 - Not Found</div>'
}

const routes = [
    {
        path: '/',
        component: Main,

        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'insights',
                component: Insights
            }
        ]
    },

    {
        path: '*',
        component: Err404,
    }
];

export default routes
