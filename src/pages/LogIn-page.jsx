import React from "react";
import { ChakraProvider, Grid, Box} from "@chakra-ui/react";
import register from "../utils/apiRegister";
import NavBarRegisterLogin from "../components/NavBar/navBarRegisterLogin";
import LogIn from '../components/Log-In/LogIn';

function LogInPage() {

    function LogInUser(UserLogin) {
        register(UserLogin)
      }

    return (
        <ChakraProvider>
          <NavBarRegisterLogin />
          <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
            <LogIn  onSubmit={LogInUser} />
          </Grid>
            
            
        </ChakraProvider>
    )
}

export default LogInPage;