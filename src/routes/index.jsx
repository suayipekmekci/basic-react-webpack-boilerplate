import React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import Home from '../views/Home';
import NotFound from '../views/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/list',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/todo',
        exact: true,
        component: Home
    }
];

class Routes extends React.Component{
    render(){
        return (
            routes.length?
                <HashRouter>
                    <Switch>
                        {routes.map((route, i) => (
                            <Route key={i} path={route.path} exact={route.exact} component={route.component} />
                        ))}

                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
            : ''
        )
    }
}

export default Routes;
