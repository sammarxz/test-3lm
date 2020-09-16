import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { FiPlus, FiEdit3, FiTrash2, FiX } from "react-icons/fi";

import api from '../../services/api';

// Components
import Button from '../../components/Button';
import Table from '../../components/Table';
import Input from '../../components/Input';

interface Role {
    roleId: number,
    name: string,
    description: string,
    editing: boolean
};

const Roles = () => {
    const [editMode, setEditMode] = useState(false);
    const [roles, setRoles] = useState<Role[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        api.get('roles').then(res => {
            const roles = [...res.data];
            roles.map(role => {
                role.editing = false
            });
            setRoles(roles);
        }).catch(error => console.error(error))
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event: KeyboardEvent) => {
        const { key } = event;
        let error;

        if (key === 'Enter') {
            try {
                api.post('roles', formData)
                    .then(res => {
                        const newRoles = roles.concat(res.data);
                        if (res.status === 200) {
                            setFormData({
                                name: '',
                                description: '',
                            });
                            setEditMode(false);
                            setRoles(newRoles);
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
    }

    const handleDelete = (roleId:number) => {
        let error;

        try {
            api.delete(`roles/${roleId}`)
                .then(res => {
                    if(res.status === 200) {
                        console.log('deleted');
                        const newRoles = roles.filter(role => role.roleId !== roleId);
                        setRoles(newRoles);
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

    const handleEdit = (index:number) => {
        const rolesClone:any = roles.map((role => ({...role})));
        rolesClone[index].editing = !rolesClone[index].editing;
        setRoles(rolesClone);
    }

    const handleEditChange = (id:number, event: ChangeEvent<HTMLInputElement>, index:number) => {
        const { name, value } = event.target;

        const updatedRoles = [...roles];

        switch (name) {
            case 'name':
                updatedRoles[index].name = value;
                break;
            case 'description':
                updatedRoles[index].description = value;
                break;
            default:
                break;
        }

        setRoles(updatedRoles);
    }

    const handleEditSubmit = (roleId:number, event: KeyboardEvent, index:number) => {
        let error;
        const { key } = event;

        const updatedRole = {
            name: roles[index].name,
            description: roles[index].description
        };

        if (key === 'Enter' || !event) {
            try {
                api.put(`roles/${roleId}`, updatedRole)
                    .then(res => {
                        if (res.status === 200) {
                            const updatedRoles = [...roles];
                            updatedRoles[index].editing = false;
                            setRoles(updatedRoles);
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
    }

    return (
        <section className="section">
            <div className="section__header mb--big d--flex jc--spaceBetween ai--center">
                <h2 className="lh--1">Cargos</h2>
                <Button 
                    color="primary" 
                    textColor="white"
                    borderColor="primary"
                    size="small"
                    className="d--flex ai--center jc--center is--icon"
                    onClick={() => setEditMode(true)}
                >
                    <FiPlus size="1.2rem" /> 
                </Button>
            </div>
            <Table head={['Nome', 'Descrição', 'Ações']}>
                {editMode && (
                    <tr>
                        <td>
                            <Input 
                                type="text" 
                                name="name" 
                                autoFocus
                                onChange={handleInputChange} 
                            />
                        </td>
                        <td>
                            <Input 
                                type="text" 
                                name="description"
                                onChange={handleInputChange}
                                onKeyDown={(event) => handleSubmit(event)}
                            />
                        </td>
                        <td>
                            <Button
                                color="transparent"
                                textColor="primary"
                                borderColor="transparent"
                                size="small"
                                onClick={() => setEditMode(false)}
                            >
                                <FiX />
                            </Button>
                        </td>
                    </tr>
                )}
                { roles.map(({ roleId, name, description, editing }, index) => {
                    return (
                        <tr key={ roleId }>
                            <td width="30%">
                                { editing ? (
                                    <Input
                                        type="text"  
                                        name="name" 
                                        value={name}
                                        autoFocus
                                        onChange={(e) => handleEditChange(roleId, e, index)}
                                        onKeyDown={(e) => handleEditSubmit(roleId, e, index)}
                                    />
                                ) : (
                                    <span>{name}</span>
                                )}
                            </td>
                            <td width="50%">
                                { editing ? (
                                    <Input
                                        type="text"  
                                        name="description" 
                                        value={description} 
                                        onChange={(e) => handleEditChange(roleId, e, index)} 
                                        onKeyDown={(e) => handleEditSubmit(roleId, e, index)}
                                    />
                                ) : (
                                    <span>{description}</span>
                                )}
                            </td>
                            <td>
                                <Button
                                    color="transparent"
                                    textColor="primary"
                                    borderColor="transparent"
                                    size="small"
                                    onClick={() => handleEdit(index)}
                                >
                                    <FiEdit3 />
                                </Button>
                                <Button
                                    color="transparent"
                                    textColor="primary"
                                    borderColor="transparent"
                                    size="small"
                                    onClick={() => handleDelete(roleId)}
                                >
                                    <FiTrash2 />
                                </Button>
                            </td>
                        </tr>
                    )
                }) }
            </Table>
        </section>
    )
}

export default Roles;