import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import SignIn from "./components/Sign-In/Sign-In"

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <NavBar />
      <SignIn />
    </ChakraProvider>
  )
}



export default App
