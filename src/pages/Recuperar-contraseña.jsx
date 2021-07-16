import React , {useState}from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import EditPassword from "../components/UserRegister/EditPassword";
import NavBar from "../components/NavBar/NavBar";
import {getUserApiPassword} from "../utils/apiTest";

function RecuperarContraseña() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
    async function editPassword(dataEditPassword, email) {
      //console.log(dataEditUser);
        await getUserApiPassword(dataEditPassword, email)
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
             <EditPassword error={registerError} onSubmit={editPassword}></EditPassword>
          </Grid>
        </ChakraProvider>
    )
}

export default RecuperarContraseña;