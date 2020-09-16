import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit3, FiPlus, FiTrash2, FiEye } from "react-icons/fi";

import api from '../../services/api';

// Components
import Table from '../../components/Table';
import Button from '../../components/Button';

interface Employee {
    id: number,
    name: string,
    lastName: string,
    [role: string]: any;
    salary: string,
};

const Employees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        api.get('employees').then(res => {
            setEmployees(res.data);
        }).catch(error => console.error(error));
    }, []);

    const handleDelete = (id:number) => {
        let error;

        try {
            api.delete(`employees/${id}`)
                .then(res => {
                    if(res.status === 200) {
                        console.log('deleted');
                        const newEmployees = employees.filter(role => role.id !== id);
                        setEmployees(newEmployees);
                    }
                })
                .catch(err => {
                    if (err.response.status === 404) {
                        throw new Error(`${err.config.url} not found`);
                    }
                    throw err;
                });
        } catch (err) {
            error = err;
        }
    }

    return (
        <section className="section">
            <div className="section__header mb--big d--flex jc--spaceBetween ai--center">
                <h2 className="lh--1">Funcionários</h2>
                <Link to="/employees/new">
                    <Button 
                        color="primary" 
                        textColor="white"
                        borderColor="primary"
                        size="small"
                        className="d--flex ai--center jc--center is--icon"
                    >
                        <FiPlus size="1.2rem" /> 
                    </Button>
                </Link>
            </div>
            <Table head={['Nome', 'Cargo', 'Salário', 'Ações']}>
                { employees.map(({ id, name, lastName, role, salary }) => (
                    <tr key={ id }>
                        <td width="40%">{`${name} ${lastName}`}</td>
                        <td width="20%">{ role.name }</td>
                        <td width="20%">{ salary }</td>
                        <td>
                            <Link to={`/employees/${id}`}>
                                <Button
                                    color="transparent"
                                    textColor="primary"
                                    borderColor="transparent"
                                    size="small"
                                >
                                    <FiEye />
                                </Button>
                            </Link>
                            <Link to={`/employees/${id}/edit`}>
                                <Button
                                    color="transparent"
                                    textColor="primary"
                                    borderColor="transparent"
                                    size="small"
                                >
                                    <FiEdit3 />
                                </Button>
                            </Link>
                            <Button
                                color="transparent"
                                textColor="primary"
                                borderColor="transparent"
                                size="small"
                                onClick={() => handleDelete(id)}
                            >
                                <FiTrash2 />
                            </Button>
                        </td>
                    </tr>
                )) }
            </Table>
        </section>
    )
}

export default Employees;