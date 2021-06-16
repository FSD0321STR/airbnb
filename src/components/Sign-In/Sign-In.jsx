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
  import TitleInput from "./Title-Input"
  import Email from "./Email"
  import Password from "./Passwsord";
  import Submit from "./Submit"

  function SignIn () {
      return (
      <Flex>
        <FormSignIn >
          <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="10rem" marginLeft= "37rem">
           <Center w="500px" textAlign='center'>
            <TitleInput />
           </Center>
           <Center w="500px">
            <Email />
           </Center>
           <Center w="500px" textAlign='center'>
            <Password />
           </Center>
           <Center w="500px" textAlign='center'>
            <Submit />
           </Center>
          </Grid>
         </FormSignIn>
      </Flex>
      );
  }

  export default SignIn;

  