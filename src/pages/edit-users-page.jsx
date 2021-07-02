import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider,Grid} from "@chakra-ui/react";
import EditUsersForm from '../components/UserRegister/EditUsersForm';
import NavBar from "../components/NavBar/NavBar";
import {editUserApi} from "../utils/apiTest";

function EditUsersPage(urlData) {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
  
  const userId = urlData.match.params.id;

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
             <EditUsersForm userId={userId} error={registerError} onSubmit={editUser}></EditUsersForm>
          </Grid>
        </ChakraProvider>
    )
}

export default EditUsersPage;