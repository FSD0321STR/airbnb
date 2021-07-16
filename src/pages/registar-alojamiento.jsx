import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box} from "@chakra-ui/react";
import RegisterFormAlojamiento from '../components/AlojamientoRegister/RegisterFormAlojamiento';
import NavBar from "../components/NavBar/NavBar";
import {registerAlojamientoApi} from "../utils/apiTest";
import imgHome from "../../images/home/imagen-home-2.jpg";

function RegisterAlojamientoPage() {

  const history = useHistory();
  const [registerError,setRegisterError] = useState("");

    async function registerAlojamientoUser(dataAlojamiento) {

      //console.log(dataAlojamiento);
        await registerAlojamientoApi(dataAlojamiento)
        .then(response => {
          if(response.message) {
            setRegisterError(response.message);
          } else {
            history.push("/");
          }
        })
        .catch((error) => {
         Promise.reject(error);
        })
      }

    return (
      <div>
        <ChakraProvider>
          <Box  width="100%" backgroundColor="#fff" >
            <NavBar />
          </Box>
            <Grid  position="center" bgRepeat="no-repeat" bgSize="260%" bgImage={imgHome}>
              <RegisterFormAlojamiento error={registerError} onSubmit={registerAlojamientoUser}></RegisterFormAlojamiento>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterAlojamientoPage;