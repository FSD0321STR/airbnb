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
        body: JSON.stringify({email, password}),
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
async function registerAlojamientoApi() {
    await alert('register alojamiento')
}
async function editAlojamientoApi() {
    await alert('edit alojamiento')
}

export {
    registerUserApi,
    loginUserApi,
    editUserApi,
    getUserApi,
    registerAlojamientoApi, 
    editAlojamientoApi,
} 