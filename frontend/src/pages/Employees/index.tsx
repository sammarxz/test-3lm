import React, { useEffect, useState } from 'react';

import api from '../../services/api';

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
        <div className="lh--1">
            <h2 className="">Empregados</h2>
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
        </div>
    )
}

export default Employees;