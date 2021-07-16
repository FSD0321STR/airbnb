import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function NameInput({value,onChange,validation}) {
    return (
        <FormControl id="name" p={2}>
            <FormLabel fontSize="sm" m={1}>Nombre</FormLabel>
            <Input name="name" value={value} onChange={onChange} type="text" placeholder="Nombre" size="sm" colorScheme="black" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba su nombre</FormHelperText> }
        </FormControl>
    )
}

export default NameInput;