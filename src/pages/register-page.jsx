import React from "react";
import { ChakraProvider, Grid} from "@chakra-ui/react";
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
            <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
              <RegisterForm onSubmit={registerUser}></RegisterForm>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterPage;