import React from "react";
import { ChakraProvider, Grid } from "@chakra-ui/react";
import register from "../utils/apiRegister";
import NavBar from "../components/NavBar/NavBar";
import PasswordRecover from "../components/Recuperar-Contraseña/Password-Recover";


function RecuperarContraseña() {

    function PasswordRecovering(UserPasswordRecover) {
        register(UserPasswordRecover)
      }

    return (
        <ChakraProvider>
        <NavBar />
          <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
            <PasswordRecover  onSubmit={PasswordRecovering} />
          </Grid>
        </ChakraProvider>
    )
}

export default RecuperarContraseña;