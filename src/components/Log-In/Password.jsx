import React from "react";
import { FormControl, Input, FormLabel, FormHelperText } from "@chakra-ui/react"

function PasswordLogIn ({value,onChange,validation}) {
    return (
        <FormControl id="password">
          <FormLabel fontSize="sm">Contraseña</FormLabel>
          <Input name="password" value={value} onChange={onChange} type="password" placeholder="Contraseña" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Min. 8 carácteres: 1 mayuscula, 1 minuscula, 1 número y un carácter especial.</FormHelperText> }
        </FormControl>
    );
}

export default PasswordLogIn;