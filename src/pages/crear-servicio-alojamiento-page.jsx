import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box} from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import { createServicioAlojamiento } from "../utils/apiTest";
import CreateServicioForm from "../components/ServiciosAlojamiento/CreateServicioForm";

function CrearServicioAlojamiento({ title }) {
  const history = useHistory();
  const [loginError,setLoginError] = useState("");

  async function CreateServicioAlojamiento({ title }) {
    //console.log(title);
    await createServicioAlojamiento( title ) 
    .then(response => {
      if(response.messageError) {
        setLoginError(response.message);
      } else {
        //localStorage.setItem('token', JSON.stringify(response.token));
        //localStorage.setItem('userId', JSON.stringify(response.userId));
        //localStorage.setItem('rol', JSON.stringify(response.rol));
        history.push("/servicios-alojamiento");
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
          <Box p="55" bgImage="url('./images/imagen-home.jpg')"/> 
            <Grid gap={4} marginTop="5%" marginBlockEnd="5%"> 
            <CreateServicioForm onSubmit={CreateServicioAlojamiento} ></CreateServicioForm>
          </Grid>
            
            
        </ChakraProvider>
    )
}

export default CrearServicioAlojamiento;