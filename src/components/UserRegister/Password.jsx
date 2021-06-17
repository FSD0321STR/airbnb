import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function PasswordInput({value,onChange,validation}) {
    return (
        <FormControl id="password" p={2}>
            <FormLabel fontSize="sm" m={1}>Contraseña</FormLabel>
            <Input name="password" value={value} onChange={onChange} type="password" placeholder="contraseña" size="sm" />
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Min. 8 carácteres: 1 mayuscula, 1 minuscula, 1 número y un carácter especial.</FormHelperText> }
        </FormControl>
    )
}

export default PasswordInput;