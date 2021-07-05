import React, { useEffect } from 'react';
import './App.css';

import { ChakraProvider, Center, Box } from "@chakra-ui/react";

import { HashRouter, Switch, Route, useParams } from "react-router-dom";


import RegisterPage from './pages/register-page';
import EditUserPage from './pages/edit-user-page';
import EditUsersPage from './pages/edit-users-page';
import RegisterAlojamientoPage from './pages/registar-alojamiento';
import EditAlojamientoPage from './pages/editar-alojamiento';
import AlojamientosAnfitrionPage from './pages/listado-alojamientos-anfitrion';
import AlojamientosFavoritosPage  from './pages/listado-alojamientos-user';
import AlojamientosPublicPage from './pages/alojamientos-public-page';
import LogInPage from './pages/LogIn-page';
import useLocalStorageString from './components/hooks/useLocalStorageString';
import { AuthContext } from './utils/auth-provider';
import FooterSimple from './components/Footer/Footer';
import RecuperarContraseña from './pages/Recuperar-contraseña';
import DeleteUserPage from './pages/admin-user-page'


function App({ Component }) {
  const [userMail,setUserMail] = useLocalStorageString("email","")



  function getUserMail(email) {
    setUserMail(email);
  }

  return (
    <HashRouter>
      <AuthContext.Provider value={userMail}>
        <div>
        <ChakraProvider>
        
          <Switch>
            <Route exact path="/user-register">
              <RegisterPage value={getUserMail} />
            </Route>
            <Route exact path="/user-login">
              <LogInPage value={getUserMail} />
            </Route>
            <Route exact path="/edit-user">
              <EditUserPage />
            </Route>
            <Route exact path="/alojamiento-register">
              <RegisterAlojamientoPage />
            </Route>
            <Route exact path="/alojamiento-edit">
              <EditAlojamientoPage />
            </Route>
            <Route exact path="/alojamientos-anfitrion">
              <AlojamientosAnfitrionPage />
            </Route>
            <Route exact path="/alojamientos-favoritos">
              <AlojamientosFavoritosPage />
            </Route>
            <Route exact path="/users">
              <DeleteUserPage />
            </Route>
            <Route exact path="/users/:id" component={EditUsersPage}>
             
            </Route>
            <Route exact path="/recuperar-contrasena">
              <RecuperarContraseña value={getUserMail} />
            </Route>
            <Route exact path="/">
              <AlojamientosPublicPage />
            </Route>
            
          </Switch>
          <FooterSimple/>
          </ChakraProvider>
        </div>
      </AuthContext.Provider>
      </HashRouter>
  )
}



export default App
