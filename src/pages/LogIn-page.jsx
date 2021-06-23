import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box} from "@chakra-ui/react";
import register from "../utils/apiRegister";
import NavBarRegisterLogin from "../components/NavBar/navBarRegisterLogin";
import LogInForm from "../components/Log-In/Log-InForm";
import { loginUserApi } from "../utils/apiTest";

function LogInPage({ email, password }) {
  const history = useHistory();
  const [loginError,setLoginError] = useState("");

  async function LogInUser({ email, password }) {
    await loginUserApi( email, password ) 
    .then(response => {
      if(response.message) {
        setLoginError(response.message);
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
        <ChakraProvider>
          <NavBarRegisterLogin />
          <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
            <LogInForm error={loginError} onSubmit={LogInUser} ></LogInForm>
          </Grid>
            
            
        </ChakraProvider>
    )
}

export default LogInPage;