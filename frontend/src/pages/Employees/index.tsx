import React, { useEffect, useState } from 'react';

import api from '../../services/api';

// Components
import Button from '../../components/Button';

interface Employee {
    id: number,
    name: string,
    lastName: string,
    role: string,
    salary: string,
};


const Employees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        api.get('employees').then(res => {
            setEmployees(res.data);
        }).catch(error => console.error(error));
    }, []);

    return (
        <section className="section">
            <div className="section__header mb--big d--flex jc--spaceBetween ai--center">
                <h2 className="lh--1">Empregados</h2>
                <Button 
                    color="primary" 
                    textColor="white"
                    borderColor="primary"
                    size="normal"
                    onClick={() => console.log('adicionar')}
                >
                    Adicionar
                </Button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map(({ id, name, lastName, role, salary }) => (
                        <tr key={ id }>
                            <td>{`${name} ${lastName}`}</td>
                            <td>{ role }</td>
                            <td>{ salary }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </section>
    )
}

export default Employees;