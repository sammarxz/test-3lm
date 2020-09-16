import React, { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";

import api from '../../services/api';

// Components
import Table from '../../components/Table';
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
                <h2 className="lh--1">Funcionários</h2>
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
            <Table head={['Nome', 'Cargo', 'Salário']}>
                { employees.map(({ id, name, lastName, role, salary }) => (
                    <tr key={ id }>
                        <td>{`${name} ${lastName}`}</td>
                        <td>{ role }</td>
                        <td>{ salary }</td>
                    </tr>
                )) }
            </Table>
        </section>
    )
}

export default Employees;