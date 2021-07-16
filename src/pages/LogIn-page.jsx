import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box} from "@chakra-ui/react";
import register from "../utils/apiRegister";
import NavBar from "../components/NavBar/NavBar";
import LogInForm from "../components/Log-In/Log-InForm";
import { loginUserApi } from "../utils/apiTest";
import imgHome from "../../images/home/imagen-home-2.jpg";

function LogInPage({ email, password }) {
  const history = useHistory();
  const [loginError,setLoginError] = useState("");

  async function LogInUser({ email, password }) {
    await loginUserApi( email, password ) 
    .then(response => {
      if(response.message) {
        setLoginError(response.message);
      } else {
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('userId', JSON.stringify(response.userId));
        localStorage.setItem('rol', JSON.stringify(response.rol));
        history.push("/");
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
          <Box p="55" bgImage={imgHome}> 
            <Grid gap={4} marginTop="5%" marginBlockEnd="5%"> 
            <LogInForm error={loginError} onSubmit={LogInUser} ></LogInForm>
          </Grid>
            
            
        </ChakraProvider>
    )
}

export default LogInPage;