import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Employees from "./pages/Employees";
import Roles from "./pages/Roles";

import Header from './components/Header';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header title="3LM" />
            <Route exact path="/" component={ Employees } />
            <Route path="/roles" component={ Roles } />
        </BrowserRouter>
    )
}

export default Routes