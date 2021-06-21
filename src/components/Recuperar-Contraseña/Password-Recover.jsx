import React from "react";
import { Flex, Center, Grid } from "@chakra-ui/react"
import EmailPasswordRecover from "./Email-recover";
import SubmitPasswordRecover from "./Submit-recover";
import TitleInputPasswordRecover from "./Title-Input-recover";

  function PasswordRecover () {
      return (
      <Flex>
        <FormSignIn >
          <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "41rem" marginBottom="15rem">
            <Center w="500px" textAlign='center'>
              <TitleInputPasswordRecover />
            </Center>
            <Center w="500px">
              <EmailPasswordRecover />
            </Center>
            <Center w="500px" textAlign='center'>
              <SubmitPasswordRecover />
            </Center>
          </Grid>
         </FormSignIn>
      </Flex>
      );
  }

  export default PasswordRecover;

  