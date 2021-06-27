import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import RegisterForm from '../components/UserRegister/RegisterForm';
import NavBarRegisterLogin from "../components/NavBar/navBarRegisterLogin";
import {registerUserApi} from "../utils/apiTest";

function RegisterPage() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");

<<<<<<< HEAD
  async function registerUser(data ) {
    await registerUserApi( data ) 
=======
  async function registerUser( dataUser ) {
    //console.log(image);
    await registerUserApi( dataUser ) 
>>>>>>> 80c4fc4d4c4550f85d084e5f112f05b2ff89ba42
    .then(response => {
      if(response.message) {
        setRegisterError(response.message);
      } else {
        localStorage.setItem('token', JSON.stringify(response));
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
          <NavBarRegisterLogin />
            <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
              <RegisterForm error={registerError} onSubmit={registerUser}></RegisterForm>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterPage;