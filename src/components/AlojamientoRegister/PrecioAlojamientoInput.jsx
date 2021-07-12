import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function PrecioAlojamientoInput({value,onChange}) {
    return (
        <FormControl id="precio" p={2}>
            <FormLabel fontSize="sm" m={1}>Precio por noche</FormLabel>
            <Input name="precio" value={value} onChange={onChange} type="text" placeholder="precio por noche" size="sm" colorScheme="blue"/>
            { !value ? <FormHelperText fontSize="xs" color="red" mx={1}>Escriba el precio por noche</FormHelperText> : "" }
        </FormControl>
    )
}

export default PrecioAlojamientoInput;