import React from "react";
import { Link, Text } from "@chakra-ui/react"

function RecuperarPassword () {
    return (
    <Text>{""}
      <Link color="teal.500" href="/recuperar-contrasena">
      ¿Has olviado la contraseña?
      </Link>
    </Text>
    );
}

export default RecuperarPassword;