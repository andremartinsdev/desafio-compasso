import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route,
   
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Repository from './pages/repository';
import Starred from './pages/starred';


const Routes = () => (
    <BRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/repository" component={Repository} />
            <Route exact path="/starred" component={Starred} />
            <Route path="/" exact component={Login} />
        </Switch>
    </BRouter>
);

export default Routes;