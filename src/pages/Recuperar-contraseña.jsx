<<<<<<< HEAD
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
=======
import React from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box } from "@chakra-ui/react";
import register from "../utils/apiRegister";
import NavBar from "../components/NavBar/NavBar";
import PasswordRecover from "../components/Recuperar-Contraseña/Password-Recover";
import { recoveryUserPassword } from "../utils/apiTest";
import imgHome from "../../images/home/imagen-home-2.jpg";

function RecuperarContraseña() {
  const history = useHistory();

    async function PasswordRecovering({ email, password }) {
      await recoveryUserPassword( email, password ) 
      .then(response => {
        if(response.message) {
          setLoginError(response.message);
        } else {
          
          history.push("/user-login");
        }
      })
      .catch((error) => {
        Promise.reject(error);
      })
    }

    return (

      <ChakraProvider>
      <Box position="fixed" width="100%" backgroundColor="#fff">
            <NavBar />
        </Box>
      <hr />
      <Box p="15" /> 
        <Grid gap={4} marginTop="5%" marginBlockEnd="5%" bgImage={imgHome}> 
        <PasswordRecover onSubmit={PasswordRecovering} />
      </Grid>
        
        
    </ChakraProvider>
        
>>>>>>> 00670237a5828fca5ca2c7a9efc9695a1edb08a5
    )
}

export default RecuperarContraseña;