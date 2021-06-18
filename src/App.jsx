import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import NavBarRegisterLogin from "./components/NavBar/NavBarRegisterLogin";
//import NavBarLogout from "./components/NavBar/NavBarLogout";

import RegisterPage from './pages/register-page';
import EditUserPage from './pages/edit-user-page';
//import registerUserApi  from './utils/apiTest';
//import loginUserApi  from './utils/apiTest';

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
            <Route path="/">
              <h1>Hola</h1>
            </Route>
          </Switch>
        </div>
      
    </BrowserRouter>
  )
}

export default App
