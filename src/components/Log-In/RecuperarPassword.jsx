import React from "react";
import { FormControl, FormLabel, Link, Text } from "@chakra-ui/react"

function RecuperarPassword () {
    return (
    <Text>{""}
      <Link color="teal.500" href="/recuperar-contraseña">
      ¿Has olviado la contraseña?
      </Link>
    </Text>
    );
}

export default RecuperarPassword;