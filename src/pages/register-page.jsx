import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import RegisterForm from '../components/UserRegister/RegisterForm';
import NavBarLogout from "../components/NavBar/NavBarLogout";
import {registerUserApi} from "../utils/apiTest";

function RegisterPage() {

    async function registerUser(userRegister) {
        await registerUserApi(userRegister);
      }

    return (
<<<<<<< HEAD
        <ChakraProvider>
          <NavBarLogout />
=======
      <div>
>>>>>>> a2f0d4586867e02b608a1b19b1f2e759682dec50
          <h2>Página de registro</h2>
        <RegisterForm onSubmit={registerUser}>
            
          </RegisterForm>
      </div>
    )
}

export default RegisterPage;