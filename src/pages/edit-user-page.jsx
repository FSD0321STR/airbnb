import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import EditUserForm from '../components/UserRegister/EditUserForm';
import NavBarLogout from "../components/NavBar/NavBarLogout";

import {editUserApi} from "../utils/apiTest";

function EditUserPage() {

    async function editUser(userRegister) {
        await editUserApi(userRegister);
      }

    return (
        <ChakraProvider>
          <NavBarLogout />
            <h2>Editar datos usuario</h2>
          <EditUserForm onSubmit={editUser}>
          </EditUserForm>
        </ChakraProvider>
    )
}

export default EditUserPage;