import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Styles
import GlobalStyle from './styles/global';

// Pages
import Employees from "./pages/Employees";
import EmployeeEdit from './pages/EmployeeEdit';
import NewEmployee from './pages/NewEmployee';
import Roles from "./pages/Roles";

// Components
import Container from './components/Container';
import Header from './components/Header';


const Routes = () => {
    return (
        <BrowserRouter>
            <>
                <GlobalStyle />
                <Container className="d--grid layout">
                    <Header title="Keeployee" />
                    <Route exact path="/" component={ Employees } />
                    <Route exact path="/employees" component={ Employees } />
                    <Route exact path="/employees/new" component={ NewEmployee } />
                    <Route exact path="/employees/:id/edit" component={ EmployeeEdit } />
                    <Route exact path="/roles" component={ Roles } />
                </Container>
            </>
        </BrowserRouter>
    )
}

export default Routes