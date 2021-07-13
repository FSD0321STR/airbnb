import React from "react"

const API_URL = 'http://localhost:8000';

async function registerUserApi(dataUser) {
    //console.log(image);
    return await fetch(`${API_URL}/register`, {
        method: 'POST',
        mode: 'cors',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: dataUser,
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function loginUserApi(email, password) {
    return await fetch(`${API_URL}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({email, password}),
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}
async function editUserApi(dataEditUser,userId) {
    //console.log(image);
    return await fetch(`${API_URL}/user/${userId}`, {
        method: 'PATCH',
        mode: 'cors',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: dataEditUser,
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}
async function deleteUserApi(userId) {
    //console.log(userId);
    return await fetch(`${API_URL}/user/${userId}`, {
         method: 'DELETE',
         mode: 'cors',
    //     // headers: {
    //     //     'Content-Type': 'application/json',
    //     // },
    //     //body: dataEditUser,
     }).then(res => res = res.json())
     .catch(error => console.log('Error:', error));
}
async function getUserApi(userId) {
    return await fetch(`${API_URL}/user/${userId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}
async function getAllUserApi() {
    return await fetch(`${API_URL}/users`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}
async function getAllTipoAlojamientoApi() {
    //console.log('aa');
    return await fetch(`${API_URL}/tipos-alojamiento`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function createTipoAlojamiento(title) {
    //console.log(title);
    return await fetch(`${API_URL}/create-tipo-alojamiento`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title}),
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function modifyTipoAlojamientoVisible(id,value) {
    //console.log(id);
    return await fetch(`${API_URL}/modify-tipo-visible/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({value}),
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function deleteTipoAlojamientoApi(tipoId) {
    //console.log(userId);
    return await fetch(`${API_URL}/tipo-alojamiento/${tipoId}`, {
         method: 'DELETE',
         mode: 'cors',
    //     // headers: {
    //     //     'Content-Type': 'application/json',
    //     // },
    //     //body: dataEditUser,
     }).then(res => res = res.json())
     .catch(error => console.log('Error:', error));
}

async function editTipoAlojamientoApi(dataEditUser,tipoId) {
    //console.log(image);
    return await fetch(`${API_URL}/tipo-alojamiento/${tipoId}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({dataEditUser}),
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function getTipoApi(tipoId) {
    //console.log(tipoId);
    return await fetch(`${API_URL}/tipo-alojamiento/${tipoId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}


async function getAllServiciosAlojamientoApi() {
    //console.log('aa');
    return await fetch(`${API_URL}/servicios-alojamiento`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function createServicioAlojamiento(title) {
    //console.log(title);
    return await fetch(`${API_URL}/create-servicio-alojamiento`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title}),
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function modifyServicioAlojamientoVisible(id,value) {
    //console.log(id);
    return await fetch(`${API_URL}/modify-servicio-visible/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({value}),
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function deleteServicioAlojamientoApi(servicioId) {
    //console.log(servicioId);
    return await fetch(`${API_URL}/servicio-alojamiento/${servicioId}`, {
         method: 'DELETE',
         mode: 'cors',
    //     // headers: {
    //     //     'Content-Type': 'application/json',
    //     // },
    //     //body: dataEditUser,
     }).then(res => res = res.json())
     .catch(error => console.log('Error:', error));
}

async function editServicioAlojamientoApi(dataEditUser,tipoId) {
    //console.log(image);
    return await fetch(`${API_URL}/servicio-alojamiento/${tipoId}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({dataEditUser}),
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function getServicioApi(tipoId) {
    //console.log(tipoId);
    return await fetch(`${API_URL}/servicio-alojamiento/${tipoId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function registerAlojamientoApi(dataAlojamiento) {
    //console.log(dataAlojamiento);
    return await fetch(`${API_URL}/createalojamiento`, {
        method: 'POST',
        mode: 'cors',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: dataAlojamiento,
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function getAlojamientoApi(alojamientoId) {
    //console.log(alojamientoId);
    return await fetch(`${API_URL}/alojamiento/${alojamientoId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        //body: dataAlojamiento,
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function getAlojamientosUserApi(alojamientoId) {
    return await fetch(`${API_URL}/alojamientos-user/${alojamientoId}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        //body: dataAlojamiento,
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}

async function editAlojamientoApi(dataEditAlojamiento, alojamientoId) {
    //console.log(image);
    return await fetch(`${API_URL}/alojamiento/${alojamientoId}`, {
        method: 'PATCH',
        mode: 'cors',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: dataEditAlojamiento,
    }).then(res => res = res.json())
    .catch(error => console.log('Error:', error));
}
async function deleteAlojamientoApi(alojamientoId) {
    //console.log(userId);
    return await fetch(`${API_URL}/alojamiento/${alojamientoId}`, {
         method: 'DELETE',
         mode: 'cors',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
     //body: dataAlojamiento,
     }).then(res => res = res.json())
     .catch(error => console.log('Error:', error));
}

export {
    registerUserApi,
    loginUserApi,
    editUserApi,
    deleteUserApi,
    getUserApi,
    getAllUserApi,
    getAllTipoAlojamientoApi,
    createTipoAlojamiento,
    modifyTipoAlojamientoVisible,
    deleteTipoAlojamientoApi,
    editTipoAlojamientoApi,
    getTipoApi,
    getAllServiciosAlojamientoApi,
    createServicioAlojamiento,
    modifyServicioAlojamientoVisible,
    deleteServicioAlojamientoApi,
    editServicioAlojamientoApi,
    getServicioApi,
    registerAlojamientoApi, 
    editAlojamientoApi,
    getAlojamientoApi,
    getAlojamientosUserApi,
    deleteAlojamientoApi,
} 