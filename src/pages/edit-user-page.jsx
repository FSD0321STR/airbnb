import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider,Grid} from "@chakra-ui/react";
import EditUserForm from '../components/UserRegister/EditUserForm';
import NavBar from "../components/NavBar/NavBar";
import {editUserApi} from "../utils/apiTest";

function EditUserPage() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");

    async function editUser(dataEditUser, userId) {
      //console.log(dataEditUser);
        await editUserApi(dataEditUser, userId)
        .then(response => {
          if(response.message) {
            setRegisterError(response.messageError);
          } else {
            //localStorage.setItem('token', JSON.stringify(response));
            history.push("/");
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
             <EditUserForm error={registerError} onSubmit={editUser}></EditUserForm>
          </Grid>
        </ChakraProvider>
    )
}

export default EditUserPage;