import React from "react"

async function registerUserApi() {
    await alert('register user')
}

async function loginUserApi() {
    await alert('login user')
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