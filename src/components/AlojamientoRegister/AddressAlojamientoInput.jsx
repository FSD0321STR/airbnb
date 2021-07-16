import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function AddressAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="address" p={2}>
            <FormLabel fontSize="sm" m={1}>Dirección</FormLabel>
            <Input name="address" value={value} onChange={onChange} type="text" placeholder="direccion" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba la dirección </FormHelperText> }
        </FormControl>
    )
}

export default AddressAlojamientoInput;