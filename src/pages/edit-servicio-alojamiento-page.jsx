import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider,Grid} from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import {editServicioAlojamientoApi} from "../utils/apiTest";
import EditServicioAlojamientoForm from "../components/ServiciosAlojamiento/EditServicioAlojamientoForm";

function EditServicioAlojamientoPage(urlData) {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
  
  const servicioId = urlData.match.params.id;
  //console.log(servicioId);

    async function editServicioAlojamiento(dataEditUser, servicioId) {
      //console.log(tipoId);
        await editServicioAlojamientoApi(dataEditUser, servicioId)
        .then(response => {
          if(response.message) {
            setRegisterError(response.messageError);
          } else {
            //localStorage.setItem('token', JSON.stringify(response));
            history.push("/servicios-alojamiento");
          }
        })
        .catch((error) => {
         Promise.reject(error);
        })
      }

    return (
        <ChakraProvider>
          <NavBar />
          <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
             <EditServicioAlojamientoForm servicioAlojamientoId={servicioId} error={registerError} onSubmit={editServicioAlojamiento}></EditServicioAlojamientoForm>
          </Grid>
        </ChakraProvider>
    )
}

export default EditServicioAlojamientoPage;