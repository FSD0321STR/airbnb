import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import LogInForm from '../components/Log-In/Log-InForm';
import register from "../utils/apiRegister";

function LogInPage() {

    function LogInUser(UserLogin) {
        register(UserLogin)
      }

    return (
        <ChakraProvider>
        <LogInForm 
        onSubmit={LogInUser}>
        </LogInForm>
          </ChakraProvider>
    )
}

export default LogInPage;