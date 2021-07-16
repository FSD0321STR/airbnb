import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function NumberGuestsAlojamientoInput({value,onChange,validation}) {
    return (
        
        <FormControl id="numberGuests" p={2}>
            <FormLabel fontSize="sm" m={1}>Número de Huéspedes</FormLabel>
            <Input max={10} min={2} name="numberGuests" value={value} onChange={onChange} type="number" placeholder="Número de huéspedes" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba el número de huéspedes</FormHelperText> }
        </FormControl>
    )
}

export default NumberGuestsAlojamientoInput;

