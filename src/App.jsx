import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider, Center, Box } from "@chakra-ui/react";
import RegisterPage from './pages/register-page';
import EditUserPage from './pages/edit-user-page';
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


function App({ Component }) {
  const [userMail,setUserMail] = useLocalStorageString("email","")



  function getUserMail(email) {
    setUserMail(email);
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={userMail}>
        <div>
        <ChakraProvider>
        
          <Switch>
            <Route path="/user-register">
              <RegisterPage value={getUserMail} />
            </Route>
            <Route path="/user-login">
              <LogInPage value={getUserMail} />
            </Route>
            <Route path="/edit-user">
              <EditUserPage />
            </Route>
            <Route path="/alojamiento-register">
              <RegisterAlojamientoPage />
            </Route>
            <Route path="/alojamiento-edit">
              <EditAlojamientoPage />
            </Route>
            <Route path="/alojamientos-anfitrion">
              <AlojamientosAnfitrionPage />
            </Route>
            <Route path="/alojamientos-favoritos">
              <AlojamientosFavoritosPage />
            </Route>
            <Route path="/recuperar-contrasena">
              <RecuperarContraseña value={getUserMail} />
            </Route>
            <Route path="/">
              <AlojamientosPublicPage />
            </Route>
            
          </Switch>
          <FooterSimple/>
          </ChakraProvider>
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}



export default App
