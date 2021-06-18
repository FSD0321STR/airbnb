import React from "react";
import { ChakraProvider} from "@chakra-ui/react";
import EditUserForm from '../components/UserRegister/EditUserForm';

import {editUserApi} from "../utils/apiTest";

function EditUserPage() {

    async function editUser(userRegister) {
        await editUserApi(userRegister);
      }

    return (
        <ChakraProvider>
            <h2>Editar datos</h2>
          <EditUserForm onSubmit={editUser}>
            
          </EditUserForm>
        </ChakraProvider>
    )
}

export default EditUserPage;