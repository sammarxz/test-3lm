import React, { useEffect, useState } from 'react';

import api from '../../services/api';

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
        <div>
            <h2 className="lh--1">Cargos</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { roles.map(({ roleId, name, description }) => (
                        <tr key={ roleId }>
                            <td>{ name }</td>
                            <td>{ description }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default Roles;