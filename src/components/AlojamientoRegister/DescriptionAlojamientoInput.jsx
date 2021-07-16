import React from "react";
import { FormControl, FormLabel, InputText, FormHelperText } from "@chakra-ui/react"

function DescriptionAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="description" p={2}>
            <FormLabel fontSize="sm" m={1}>Descripción del alojamiento</FormLabel>
            <InputText name="description" value={value} onChange={onChange} type="text" placeholder="Descripción del alojamiento" size="sm" colorScheme="blue" bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Describa brevemente su alojamiento</FormHelperText> }
        </FormControl>
    )
}

export default DescriptionAlojamientoInput;