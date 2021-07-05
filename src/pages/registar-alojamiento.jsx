import React from "react";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import RegisterFormAlojamiento from '../components/AlojamientoRegister/RegisterFormAlojamiento';
import NavBar from "../components/NavBar/NavBar";
import {registerAlojamientoApi} from "../utils/apiTest";

function RegisterAlojamientoPage() {

    async function registerAlojamientoUser(registerAlojamiento) {
        await registerAlojamientoApi(registerAlojamiento);
      }

    return (
      <div>
        <ChakraProvider>
          <NavBar />
            <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
              <RegisterFormAlojamiento onSubmit={registerAlojamientoUser}></RegisterFormAlojamiento>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterAlojamientoPage;