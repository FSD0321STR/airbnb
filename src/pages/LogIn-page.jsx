import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import register from "../utils/apiRegister";
import NavBarRegisterLogin from "../components/NavBar/navBarRegisterLogin";
import LogIn from '../components/Log-In/LogIn';

function LogInPage() {

    function LogInUser(UserLogin) {
        register(UserLogin)
      }

    return (
        <ChakraProvider>
          <NavBarRegisterLogin />
          <LogIn onSubmit={LogInUser}/>
        </ChakraProvider>
    )
}

export default LogInPage;