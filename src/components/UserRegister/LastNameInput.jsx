import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function LastNameInput({value,onChange,validation}) {
    return (
        <FormControl id="lastName" p={2}>
            <FormLabel fontSize="sm" m={1}>Apellidos</FormLabel>
            <Input name="lastName" value={value} onChange={onChange} type="text" placeholder="Apellidos" size="sm" />
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba su apellido</FormHelperText> }
        </FormControl>
    )
}

export default LastNameInput;