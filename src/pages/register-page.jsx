import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import RegisterForm from '../components/UserRegister/RegisterForm';

import {registerUserApi} from "../utils/apiTest";

function RegisterPage() {

    async function registerUser(userRegister) {
        await registerUserApi(userRegister);
      }

    return (
        <ChakraProvider>
          <h2>Página de registro</h2>
        <RegisterForm onSubmit={registerUser}>
            
          </RegisterForm>
          </ChakraProvider>
    )
}

export default RegisterPage;