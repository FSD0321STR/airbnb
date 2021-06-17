import React from "react";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem,
  Center,
  FormControl,
  Input,
  Grid,
  Square, 
  Circle,
  FormLabel,
  FormHelperText,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'
  import FormSignIn from "./Form-Sign-In"
  import TitleInputLogIn from "./Title-Input"
  import EmailLogIn from "./Email"
  import PasswordLogIn from "./Passwsord";
  import SubmitLogIn from "./Submit"

  function LogIn () {
      return (
      <Flex>
        <FormSignIn >
          <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="10rem" marginLeft= "37rem">
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
            <SubmitLogIn />
           </Center>
          </Grid>
         </FormSignIn>
      </Flex>
      );
  }

  export default LogIn;

  