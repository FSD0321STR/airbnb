import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import RegisterFormAlojamiento from '../components/AlojamientoRegister/RegisterFormAlojamiento';
import NavBar from "../components/NavBar/NavBar";
import {registerAlojamientoApi} from "../utils/apiTest";

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
          <NavBar />
            <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
              <RegisterFormAlojamiento error={registerError} onSubmit={registerAlojamientoUser}></RegisterFormAlojamiento>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterAlojamientoPage;