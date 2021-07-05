import React from "react";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import RegisterFormAlojamiento from '../components/AlojamientoRegister/RegisterFormAlojamiento';
import NavBar from "../components/NavBar/NavBar";
import {editAlojamientoApi} from "../utils/apiTest";

function EditAlojamientoPage() {

    async function editAlojamientoUser(editAlojamiento) {
        await editAlojamientoApi(editAlojamiento);
      }

    return (
      <div>
        <ChakraProvider>
          <NavBar />
            <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
              <RegisterFormAlojamiento onSubmit={editAlojamientoUser}></RegisterFormAlojamiento>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default EditAlojamientoPage;