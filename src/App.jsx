import React, { useEffect } from 'react';
import './App.css';

import { ChakraProvider, Center, Box } from "@chakra-ui/react";

import { HashRouter, Switch, Route, useParams } from "react-router-dom";


import RegisterPage from './pages/register-page';
import EditUserPage from './pages/edit-user-page';
import EditUsersPage from './pages/edit-users-page';
import RegisterAlojamientoPage from './pages/registar-alojamiento';
import AlojamientosAnfitrionPage from './pages/listado-alojamientos-anfitrion';
import AlojamientosFavoritosPage  from './pages/listado-alojamientos-user';
import AlojamientosPublicPage from './pages/alojamientos-public-page';
import LogInPage from './pages/LogIn-page';
import useLocalStorageString from './components/hooks/useLocalStorageString';
import { AuthContext } from './utils/auth-provider';
import FooterSimple from './components/Footer/Footer';
import RecuperarContraseña from './pages/Recuperar-contraseña';
import DeleteUserPage from './pages/admin-user-page'
import TipoAlojamientoPage from './pages/tipo-de-alojamiento-page';
import CrearTipoAlojamiento from './pages/crear-tipo-alojamientos-page';
import CrearServicioAlojamiento from './pages/crear-servicio-alojamiento-page';
import EditTipoAlojamientoPage from './pages/edit-tipo-alojamiento-page';
import ServiciosAlojamientoPage from './pages/servicios-alojamiento-page';
import EditServicioAlojamientoPage from './pages/edit-servicio-alojamiento-page';
import DetalleAlojamiento from './pages/reserva-detalles-page';
import EditAlojamientoPage from './pages/editar-alojamiento';

function App({ Component }) {
  const [userMail,setUserMail] = useLocalStorageString("email","")



  function getUserMail(email) {
    setUserMail(email);
  }

  return (
    <HashRouter>
      <AuthContext.Provider value={userMail}>
        <div>
        <ChakraProvider >
        
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
            <Route exact path="/alojamientos-anfitrion/:id" component={AlojamientosAnfitrionPage}>
              
            </Route>
            <Route exact path="/alojamientos-favoritos">
              <AlojamientosFavoritosPage />
            </Route>
            <Route exact path="/users">
              <DeleteUserPage />
            </Route>
            <Route exact path="/tipo-alojamiento">
              <TipoAlojamientoPage />
            </Route>
            <Route exact path="/servicios-alojamiento">
              <ServiciosAlojamientoPage />
            </Route>
            <Route exact path="/create-tipo-alojamiento">
              <CrearTipoAlojamiento />
            </Route>
            <Route exact path="/create-servicio-alojamiento">
              <CrearServicioAlojamiento />
            </Route>
            <Route exact path="/tipos-alojamientos/:id" component={EditTipoAlojamientoPage}>
            </Route>
            <Route exact path="/servicios-alojamientos/:id" component={EditServicioAlojamientoPage}>
            </Route>
            <Route exact path="/users/:id" component={EditUsersPage}>
            </Route>
            <Route exact path="/alojamiento/:id" component={EditAlojamientoPage}>
            </Route>
            <Route exact path="/recuperar-contrasena">
              <RecuperarContraseña value={getUserMail} />
            </Route>
            <Route exact path="/detalle-alojamiento/:id" component={DetalleAlojamiento}>
              
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
