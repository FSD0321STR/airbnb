import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import RegisterPage from './pages/register-page';
import EditUserPage from './pages/edit-user-page';


function App({ Component }) {

  return (
    <BrowserRouter>
      
        <div>
        <ChakraProvider>
          <NavBar />
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
