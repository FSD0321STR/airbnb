import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import RegisterPage from './pages/register-page';
import LogIn from './components/Log-In/LogIn';
import LogInPage from './pages/LogIn-page';


function App({ Component }) {

  return (
    <BrowserRouter>
      
        <div>
        <ChakraProvider>
          <NavBar />
          <LogIn />
        </ChakraProvider>
          <hr />
          <Switch>
            <Route path="/user-register">
              <RegisterPage />
            </Route>
            <Route path="/log-in">
              <LogInPage />
            </Route>
          </Switch>
        </div>
      
    </BrowserRouter>
  )
}



export default App
