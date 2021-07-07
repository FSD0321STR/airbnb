import React from "react";
import { Flex, Center, Grid } from "@chakra-ui/react"
import FormSignIn from "./Form-Sign-In"
import TitleReserva from "./Title-Reserva";
import EmailReserva from "./Email-Reserva";
import FullName from "./Name-Reserva";
import MessageBox from "./Message-Reserva";
import SubmitReserva from "./Submit-Reserva";

  function ReservaForm () {
      return (
      <Flex>
        <FormSignIn >
          <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "41rem" marginBottom="15rem">
            <Center w="500px" textAlign='center'>
              <TitleReserva />
            </Center>
            <Center w="500px">
              <FullName />
            </Center>
            <Center w="500px" textAlign='center'>
              <EmailReserva />
            </Center>
            <Center w="500px" textAlign='center'>
              <MessageBox />
            </Center>
            <Center w="500px" textAlign='center'>
              <SubmitReserva />
            </Center>
          </Grid>
         </FormSignIn>
      </Flex>
      );
  }

  export default ReservaForm;