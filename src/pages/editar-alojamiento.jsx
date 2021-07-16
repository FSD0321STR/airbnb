import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import EditFormAlojamiento from '../components/AlojamientoRegister/EditFormAlojamiento';
import NavBar from "../components/NavBar/NavBar";
import {editAlojamientoApi} from "../utils/apiTest";

function EditAlojamientoPage(urlData) {

  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
  const alojamientoId = urlData.match.params.id;
  const userId = JSON.parse(localStorage.getItem("userId")).id;
  //console.log(userId);

  async function editAlojamientoUser(dataEditAlojamiento, alojamientoId) {
    //console.log(dataEditAlojamiento);
      await editAlojamientoApi(dataEditAlojamiento, alojamientoId)
      .then(response => {
        if(response.message) {
          setRegisterError(response.messageError);
        } else {
          //localStorage.setItem('token', JSON.stringify(response));
          history.push(`/alojamientos-anfitrion/${userId}`);
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
              <EditFormAlojamiento alojamientoId={alojamientoId} onSubmit={editAlojamientoUser}></EditFormAlojamiento>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default EditAlojamientoPage;