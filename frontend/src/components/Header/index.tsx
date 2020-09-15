import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHexagon, FiUsers, FiBriefcase } from 'react-icons/fi';

import { HeaderWrapper, Logo, Navbar } from './styles';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <HeaderWrapper>
            <Logo className="d--flex">
                <FiHexagon size='1.6em' className="mr--normal c--primary" />
                <h1 className="fs--medium fw--semiBold">{title}</h1>
            </Logo>
            <Navbar className="mt--big">
                <ul>
                    <li>
                        <NavLink exact={true} to="/" activeClassName='is--active' className="c--lightText">
                            <FiUsers /> Empregados
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/roles" activeClassName='is--active' className="c--lightText">
                            <FiBriefcase /> Cargos
                        </NavLink>
                    </li>
                </ul>
            </Navbar>
        </HeaderWrapper>
    ) 
}

export default Header;