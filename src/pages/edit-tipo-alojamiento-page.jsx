import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider,Grid} from "@chakra-ui/react";
import EditUsersForm from '../components/UserRegister/EditUsersForm';
import NavBar from "../components/NavBar/NavBar";
import {editTipoAlojamientoApi} from "../utils/apiTest";
import EditTipoAlojamientoForm from "../components/TiposAlojamiento/EditTipoAlojamientoForm";

function EditTipoAlojamientoPage(urlData) {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
  
  const tipoId = urlData.match.params.id;
  //console.log(tipoId);

    async function editTipoAlojamiento(dataEditUser, tipoId) {
      //console.log(tipoId);
        await editTipoAlojamientoApi(dataEditUser, tipoId)
        .then(response => {
          if(response.message) {
            setRegisterError(response.messageError);
          } else {
            //localStorage.setItem('token', JSON.stringify(response));
            history.push("/tipo-alojamiento");
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
             <EditTipoAlojamientoForm tipoAlojamientoId={tipoId} error={registerError} onSubmit={editTipoAlojamiento}></EditTipoAlojamientoForm>
          </Grid>
        </ChakraProvider>
    )
}

export default EditTipoAlojamientoPage;