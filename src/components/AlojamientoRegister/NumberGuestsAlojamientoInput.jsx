import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function NumberGuestsAlojamientoInput({value,onChange}) {
    return (
        
        <FormControl id="numberGuests" p={2}>
            <FormLabel fontSize="sm" m={1}>Número de Huéspedes</FormLabel>
            <Input name="numberGuests" value={value} onChange={onChange} type="number" placeholder="Numero-huespedes" size="sm" colorScheme="blue"/>
            { !value ? <FormHelperText fontSize="xs" color="red" mx={1}>Escriba el número de huéspedes</FormHelperText> : "" }
        </FormControl>
    )
}

export default NumberGuestsAlojamientoInput;