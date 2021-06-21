import React from "react";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import RegisterFormAlojamiento from '../components/AlojamientoRegister/RegisterFormAlojamiento';
import NavBarLogout from "../components/NavBar/NavBarLogout";
import {registerAlojamientoApi} from "../utils/apiTest";

function RegisterAlojamientoPage() {

    async function registerAlojamientoUser(registerAlojamiento) {
        await registerAlojamientoApi(registerAlojamiento);
      }

    return (
      <div>
        <ChakraProvider>
          <NavBarLogout />
            <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
              <RegisterFormAlojamiento onSubmit={registerAlojamientoUser}></RegisterFormAlojamiento>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterAlojamientoPage;