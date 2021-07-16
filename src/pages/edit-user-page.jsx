import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import EditUserForm from '../components/UserRegister/EditUserForm';
import NavBar from "../components/NavBar/NavBar";
import {editUserApi} from "../utils/apiTest";
import imgHome from "../../images/home/imagen-home-2.jpg";

function EditUserPage() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");

    async function editUser(dataEditUser, userId) {
    
        await editUserApi(dataEditUser, userId)
        .then(response => {
          if(response.message) {
            setRegisterError(response.messageError);
          } else {
            
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
          <Grid marginTop="1%" position="center" bgRepeat="no-repeat" bgSize="100%" bgImage={imgHome}>
             <EditUserForm error={registerError} onSubmit={editUser}></EditUserForm>
          </Grid>
        </ChakraProvider>
    )
}

export default EditUserPage;