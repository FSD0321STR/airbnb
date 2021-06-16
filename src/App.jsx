import React, { useState } from 'react';
import './App.css';
import { ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import RegisterPage from './pages/register-page';


function App({ Component }) {

  return (
    
      
        <ChakraProvider>
          <NavBar />
          
        </ChakraProvider>
          
  )
}



export default App
