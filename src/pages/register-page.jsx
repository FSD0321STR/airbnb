import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import RegisterForm from '../components/UserRegister/RegisterForm';
import NavBarRegisterLogin from "../components/NavBar/navBarRegisterLogin";
import {registerUserApi} from "../utils/apiTest";

function RegisterPage() {

    async function registerUser(userRegister) {
        await registerUserApi(userRegister);
      }

    return (
      <div>
        <ChakraProvider>
          <NavBarRegisterLogin />
            <h2>Página de registro</h2>
          <RegisterForm onSubmit={registerUser}>
          </RegisterForm>
        </ChakraProvider>
      </div>
    )
}

export default RegisterPage;