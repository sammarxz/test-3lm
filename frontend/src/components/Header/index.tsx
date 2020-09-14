import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <Link to="/">Empregados</Link>
                <Link to="/roles">Cargos</Link>
            </nav>
        </header>
    ) 
}

export default Header;