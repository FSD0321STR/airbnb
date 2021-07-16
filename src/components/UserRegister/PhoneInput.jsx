import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function PhoneInput({value,onChange,validation}) {
    return (
        <FormControl id="phone" p={2}>
            <FormLabel fontSize="sm" m={1}>Teléfono</FormLabel>
            <Input name="phone" value={value} onChange={onChange} type="text" placeholder="teléfono" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba su teléfono</FormHelperText> }
        </FormControl>
    )
}

export default PhoneInput;