import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function AddressAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="address" p={2}>
            <FormLabel fontSize="sm" m={1}>Dirección del alojamiento</FormLabel>
            <Input name="address" value={value} onChange={onChange} type="text" placeholder="Dirección del alojamiento" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba la dirección del alojamiento</FormHelperText> }
        </FormControl>
    )
}

export default AddressAlojamientoInput;