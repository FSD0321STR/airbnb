import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function CountryAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="country" p={2}>
            <FormLabel fontSize="sm" m={1}>País</FormLabel>
            <Input name="country" value={value} onChange={onChange} type="text" placeholder="Pais" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba el País</FormHelperText> }
        </FormControl>
    )
}

export default CountryAlojamientoInput;