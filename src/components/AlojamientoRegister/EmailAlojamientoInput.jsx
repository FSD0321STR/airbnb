import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function EmailAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="email" p={2}>
            <FormLabel fontSize="sm"  m={1}>Email</FormLabel>
            <Input name="email" value={value} onChange={onChange} type="email" placeholder="Email" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba un email de contacto para sus huéspedes</FormHelperText> }
        </FormControl>
    )
}

export default EmailAlojamientoInput;