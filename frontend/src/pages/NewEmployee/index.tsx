import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheck } from "react-icons/fi";

import api from '../../services/api';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';

interface Employee {
    id: number,
    name: string,
    lastName: string,
    [role: string]: any;
    salary: string,
};

interface Role {
    roleId: number,
    name: string,
    description: string,
    editing: boolean
};

const NewEmployee = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        role: '1',
        birthDate: '',
        salary: ''
    });

    useEffect(() => {
        api.get(`roles`).then(res => {
            setRoles(res.data);
        }).catch(error => console.error(error));
    }, []);

    const formatDate = (inputDate:string) => {
        if (inputDate) {
            let newDate = inputDate.split('-');
            return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
        }
    }

    const handleSubmit = (e:FormEvent) => {
        let error;
        e.preventDefault();
        
        if (formData.name && formData.lastName && formData.role && formData.salary && formData.birthDate) {
            const data = {...formData};
            const formatedDate = formatDate(data.birthDate)
            // const role:Role = Object(data.role);
            data.birthDate = formatedDate || '';

            try {
                api.post('employees', data)
                    .then(res => {
                        if (res.status === 200) {
                            history.push('/');
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
        } else {
            // TODO: Show warning error 
            console.log('preencha todos os campos');
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <section className="section">
            <div className="section__header mb--big d--flex jc--spaceBetween ai--center">
                <h2 className="lh--1">Novo Funcionário</h2>
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
                            value={formData.role} 
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
                            type="number" 
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
                            value={formData.birthDate}
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
};

export default NewEmployee; 