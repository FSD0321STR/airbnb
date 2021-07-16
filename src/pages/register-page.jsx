import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box } from "@chakra-ui/react";
import RegisterForm from '../components/UserRegister/RegisterForm';
import NavBar from "../components/NavBar/NavBar";
import {registerUserApi} from "../utils/apiTest";
import useLocalStorageString from "../components/hooks/useLocalStorageString";
import imgHome from "../../images/home/imagen-home-2.jpg";

function RegisterPage() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");

  async function registerUser( dataUser ) {
    //console.log(dataUser);
    await registerUserApi( dataUser ) 

    .then(response => {
      if(response.message) {
        setRegisterError(response.message);
      } else {
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('userId', JSON.stringify(response.userId));
        history.push("/");
      }
    })
    .catch((error) => {
     Promise.reject(error);
    })
  }

    return (
      <div>
        <ChakraProvider>
        <Box position="fixed" width="100%" backgroundColor="#fff">
          <NavBar />
        </Box>
        <Grid marginTop="1%" position="center" bgRepeat="no-repeat" bgSize="100%" bgImage={imgHome}>

              <RegisterForm error={registerError} onSubmit={registerUser}></RegisterForm>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterPage;