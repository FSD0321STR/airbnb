import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function NameAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="name" p={2}>
            <FormLabel fontSize="sm" m={1}>Nombre</FormLabel>
            <Input name="name" value={value} onChange={onChange} type="text" placeholder="Nombre" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba un nombre para su alojamiento</FormHelperText> }
        </FormControl>
    )
}

export default NameAlojamientoInput;