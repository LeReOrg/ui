import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from './container/Client/layout';
const Home =  React.lazy(() => import('./components/Client/Home/Home')) ;

const loading = () => <div className="animated fadeIn pt-3 text-center"></div>;

const Routes = () => {
    return (
        <Layout>
          <React.Suspense fallback={loading()}>
            <Switch>
                <Route path='/' exact component= {Home } />
            </Switch>
          </React.Suspense>
        </Layout>
         
    );
  };
  export default Routes;