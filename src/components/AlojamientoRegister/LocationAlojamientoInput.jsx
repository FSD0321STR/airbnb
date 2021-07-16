import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function LocationAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="location" p={2}>
            <FormLabel fontSize="sm" m={1}>Población</FormLabel>
            <Input name="location" value={value} onChange={onChange} type="text" placeholder="Población" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba la población </FormHelperText> }
        </FormControl>
    )
}

export default LocationAlojamientoInput;