import React from "react";
import { ChakraProvider,Grid} from "@chakra-ui/react";
import EditUserForm from '../components/UserRegister/EditUserForm';
import NavBarLogout from "../components/NavBar/NavBarLogout";
import editUser from "../utils/apiEditUser";

function EditUserPage() {

    async function EditUser(UserEdit) {
        await editUser(UserEdit);
      }

    return (
        <ChakraProvider>
          <NavBarLogout />
          <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
             <EditUserForm onSubmit={EditUser}></EditUserForm>
          </Grid>
        </ChakraProvider>
    )
}

export default EditUserPage;