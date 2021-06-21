import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function EmailAlojamientoInput({value,onChange}) {
    return (
        <FormControl id="email" p={2}>
            <FormLabel fontSize="sm"  m={1}>Email</FormLabel>
            <Input name="email" value={value} onChange={onChange} type="email" placeholder="Email" size="sm" colorScheme="blue"/>
            { <FormHelperText fontSize="xs" color="red" mx={1}>Escriba un emailde contacto para sus huéspedes</FormHelperText> }
        </FormControl>
    )
}

export default EmailAlojamientoInput;