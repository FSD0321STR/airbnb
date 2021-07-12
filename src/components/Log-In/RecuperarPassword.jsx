import React from "react";
import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

function RecuperarPassword () {
    return (
    <Text>{""}
      <Link to="/recuperar-contrasena" color="teal.500">
      ¿Has olvidado la contraseña?
      </Link>
    </Text>
    );
}

export default RecuperarPassword;