import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { FiCheck } from "react-icons/fi";

import api from '../../services/api';

// Utils
import { MaskMoney } from '../../utils';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';


interface employeeEditProps {
    id: string;
}

interface Employee {
    id: number,
    name: string,
    lastName: string,
    [role: string]: any;
    salary: string,
    birthDate: string,
};

interface Role {
    roleId: number,
    name: string,
    description: string,
    editing: boolean
};

const EmployeeEdit = ({ match }: RouteComponentProps<employeeEditProps>) => {
    const { id } = match.params;
    const [employee, setEmployee] = useState<Employee>(Object);
    const [roles, setRoles] = useState<Role[]>([]);

    const history = useHistory();

    const [formData, setFormData] = useState<any>({
        name: '',
        lastName: '',
        role: '',
        birthDate: '',
        salary: ''
    });

    useEffect(() => {
        api.get(`employees/${id}`).then(res => {
            setEmployee(res.data);
            setFormData(res.data);
        }).catch(error => console.error(error));

        api.get(`roles`).then(res => {
            setRoles(res.data);
        }).catch(error => console.error(error));
    }, []);

    const formatDate = (inputDate:string) => {
        if (inputDate) {
            let newDate = inputDate.split('/');
            return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
        }
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        const data = {...formData};

        if (typeof(data.role) === 'object') {
            data.role = data.role.roleId;
        }

        api.put(`employees/${id}`, data)
            .then(res => {
                if (res.status === 200) {
                    history.push('/');
                }
            }).catch(err => console.error(err));
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        
        if (name === 'salary') {
            const salary = MaskMoney(value);
            setFormData({
                ...formData,
                salary
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    } 

    if (employee.role) {
        return (
            <section className="section">
                <div className="section__header mb--big d--flex jc--spaceBetween ai--center">
                    <h2 className="lh--1">
                        <span className="d--block mb--normal fs--normal">Editando:</span> 
                        {`${employee.name} ${employee.lastName}`} ({employee.role.name})
                    </h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="d--grid gtc--2 gap--16">
                        <div className="field-group">
                            <label htmlFor="name">Nome</label>
                            <Input 
                                type="text" 
                                name="name"
                                id="name"
                                value={formData.name}
                                className="is--filled"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div className="field-group">
                            <label htmlFor="lastName">Sobrenome</label>
                            <Input 
                                type="text" 
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                className="is--filled"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="d--grid gtc--3 gap--16 mt--normal">
                        <div className="field-group">
                            <label htmlFor="role">Cargo</label>
                            <select 
                                name="role" 
                                id="role"
                                value={formData.role.roleId}
                                onChange={(e) => handleInputChange(e)}
                            >
                                { roles.map(role => (
                                    <option key={ role.roleId } value={role.roleId}>{ role.name }</option>
                                )) }
                            </select>
                        </div>
                        <div className="field-group">
                            <label htmlFor="salary">Salário</label>
                            <Input 
                                type="text" 
                                name="salary"
                                id="salary"
                                value={formData.salary}
                                className="is--filled"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div className="field-group">
                            <label htmlFor="birthDate">Data de Nascimento</label>
                            <Input 
                                type="date" 
                                name="birthDate"
                                id="birthDate"
                                value={formatDate(formData.birthDate)}
                                className="is--filled"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            color="primary"
                            textColor="white"
                            borderColor="primary"
                            size="normal"
                            className="is--full mt--medium"
                        >
                            <FiCheck /> Pronto
                        </Button>
                    </div>
                </form>
            </section>
        );
    } else {
        return (
            <h1>Not Found</h1>
        )
    }
    
};

export default EmployeeEdit;