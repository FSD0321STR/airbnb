import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import NavBarRegisterLogin from "./components/NavBar/NavBarRegisterLogin";
import RegisterPage from './pages/register-page';
import EditUserPage from './pages/edit-user-page';
import AlojamientosPage from './pages/alojamientos-user-page';
import AlojamientosPublicPage from './pages/alojamientos-public-page';
import LogIn from './components/Log-In/LogIn';
import LogInPage from './pages/LogIn-page';
import useLocalStorageString from './components/hooks/useLocalStorageString';
import { AuthContext } from './utils/auth-provider';

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
          <NavBarRegisterLogin />
          <LogIn />
          <hr />
          <Switch>
            <Route path="/user-register">
              <RegisterPage value={getUserMail} />
            </Route>
            <Route path="/user-login">
              <RegisterPage />
            </Route>
            <Route path="/edit-user">
              <EditUserPage />
            </Route>
            <Route path="/alojamientos-anfitrion">
              <AlojamientosPage />
            </Route>
            <Route path="/seleccion-alojamiento-vacaciones">
              <AlojamientosPage />
            </Route>
            <Route path="/">
              <AlojamientosPublicPage />
            </Route>
            <Route path="/log-in">
              <LogInPage />
            </Route>
          </Switch>
          </ChakraProvider>
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}



export default App
