import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import RegisterForm from '../components/UserRegister/RegisterForm';

import register from "../utils/apiRegister";

function RegisterPage() {

    function registerUser(userRegister) {
        register(userRegister);
      }

    return (
        <ChakraProvider>
        <RegisterForm onSubmit={registerUser}>
            
          </RegisterForm>
          </ChakraProvider>
    )
}

export default RegisterPage;