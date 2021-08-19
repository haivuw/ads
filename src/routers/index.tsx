import React, { Suspense, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import LoadingComponent from 'components/Atoms/Loading';
import { userRoutes } from './userRouters';

const Index = React.lazy(() => import('../pages/Campaigns/Lists'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Layout>
                        {/* <Route exact strict path="/">
                            <Suspense fallback={<LoadingComponent />}>
                                <Index />
                            </Suspense>
                        </Route> */}
                        {userRoutes.map((route, i) => {
                            //   if (!route.protected) {
                            return (
                                <Route key={i} exact strict path={route.path}>
                                    <Suspense fallback={<LoadingComponent />}>
                                        <route.component
                                        // params={route.params}
                                        // key_screen={route.key_screen}
                                        />
                                    </Suspense>
                                </Route>
                            );
                        })}
                    </Layout>
                </Route>
                <Route exact strict path="*">
                    <Suspense fallback={<LoadingComponent />}>
                        <NotFound />
                    </Suspense>
                </Route>
            </Switch>
        </Router>
    );
}

export default MainRouter;
