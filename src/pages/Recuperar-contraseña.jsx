import React from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box } from "@chakra-ui/react";
import register from "../utils/apiRegister";
import NavBar from "../components/NavBar/NavBar";
import PasswordRecover from "../components/Recuperar-Contraseña/Password-Recover";
import { recoveryUserPassword } from "../utils/apiTest";
import imgHome from "../../images/home/imagen-home-2.jpg";

function RecuperarContraseña() {
  const history = useHistory();

    async function PasswordRecovering({ email, password }) {
      await recoveryUserPassword( email, password ) 
      .then(response => {
        if(response.message) {
          setLoginError(response.message);
        } else {
          
          history.push("/user-login");
        }
      })
      .catch((error) => {
        Promise.reject(error);
      })
    }

    return (

      <ChakraProvider>
      <Box position="fixed" width="100%" backgroundColor="#fff">
            <NavBar />
        </Box>
      <hr />
      <Box p="15" /> 
        <Grid gap={4} marginTop="5%" marginBlockEnd="5%" bgImage={imgHome}> 
        <PasswordRecover onSubmit={PasswordRecovering} />
      </Grid>
        
        
    </ChakraProvider>
        
    )
}

export default RecuperarContraseña;