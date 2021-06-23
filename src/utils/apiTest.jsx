import React from "react"

const API_URL = 'http://localhost:8000';

async function registerUserApi() {
    await alert('register user')
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
async function editUserApi() {
    await alert('edit user')
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
    registerAlojamientoApi, 
    editAlojamientoApi,
} 