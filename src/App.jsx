import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import NavBarRegisterLogin from "./components/NavBar/NavBarRegisterLogin";
import RegisterPage from './pages/register-page';
import EditUserPage from './pages/edit-user-page';
import AlojamientosPage from './pages/alojamientos-user-page';
import AlojamientosPublicPage from './pages/alojamientos-public-page';


function App({ Component }) {


  return (
    <BrowserRouter>
        <div>
        <ChakraProvider>
          <NavBarRegisterLogin />
        </ChakraProvider>
          <hr />
          <Switch>
            <Route path="/user-register">
              <RegisterPage />
            </Route>
            <Route path="/edit-user">
              <EditUserPage />
            </Route>
            <Route path="/alojamientos-user">
              <AlojamientosPage />
            </Route>
            <Route path="/">
              <AlojamientosPublicPage />
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  )
}



export default App
