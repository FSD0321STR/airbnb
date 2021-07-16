import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function TypeAlojamientoChecklist({value,onChange,validation}) {
    return (
        <FormControl id="type" p={2}>
            <FormLabel fontSize="sm" m={1}>Tipo de Alojamiento</FormLabel>
            <Input name="type" value={value} onChange={onChange} type="text" placeholder="Tipo alojamiento" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Elija el tipo de alojamiento</FormHelperText> }
        </FormControl>
    )
}

export default TypeAlojamientoChecklist;