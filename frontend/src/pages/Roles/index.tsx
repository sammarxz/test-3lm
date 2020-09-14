import React, { useEffect } from 'react';

import api from '../../services/api';

const Roles = () => { 
    useEffect(() => {
        api.get('roles').then(response => {
            console.log('response', response)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Cargos</h1>
        </div>
    )
}

export default Roles;