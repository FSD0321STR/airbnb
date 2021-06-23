import React from "react";
import { Flex, Center, Grid } from "@chakra-ui/react"
import FormSignIn from "./Form-Sign-In"
import TitleInputLogIn from "./Title-Input"
import EmailLogIn from "./Email"
import PasswordLogIn from "./Password";
import SubmitLogIn from "./Submit"
import RecuperarPassword from "./RecuperarPassword";

  function LogIn () {
      return (
      <Flex>
        <FormSignIn >
          <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "41rem" marginBottom="15rem">
            <Center w="500px" textAlign='center'>
              <TitleInputLogIn />
            </Center>
            <Center w="500px">
              <EmailLogIn />
            </Center>
            <Center w="500px" textAlign='center'>
              <PasswordLogIn />
            </Center>
            <Center w="500px" textAlign='center'>
              <RecuperarPassword />
            </Center>
            <Center w="500px" textAlign='center'>
              <SubmitLogIn />
            </Center>
          </Grid>
         </FormSignIn>
      </Flex>
      );
  }

  export default LogIn;

  