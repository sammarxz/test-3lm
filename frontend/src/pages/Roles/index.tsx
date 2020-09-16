import React, { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";

import api from '../../services/api';

// Components
import Button from '../../components/Button';
import Table from '../../components/Table';

interface Role {
    roleId: number,
    name: string,
    description: string
};

const Roles = () => {
    const [roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        api.get('roles').then(res => {
            setRoles(res.data);
        }).catch(error => console.error(error))
    }, []);

    return (
        <section className="section">
            <div className="section__header mb--big d--flex jc--spaceBetween ai--center">
                <h2 className="lh--1">Cargos</h2>
                <Button 
                    color="primary" 
                    textColor="white"
                    borderColor="primary"
                    size="small"
                    className="d--flex ai--center jc--spaceBetween"
                    onClick={() => console.log('adicionar')}
                >
                    <FiPlus size="1.2rem" /> 
                </Button>
            </div>
            <Table head={['Nome', 'Descrição']}>
                { roles.map(({ roleId, name, description }) => (
                    <tr key={ roleId }>
                        <td>{ name }</td>
                        <td>{ description }</td>
                    </tr>
                )) }
            </Table>
        </section>
    )
}

export default Roles;