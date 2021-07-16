import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function StateAlojamientoInput({value,onChange,validation}) {
    return (
        <FormControl id="state" p={2}>
            <FormLabel fontSize="sm" m={1}>Estado/Provincia</FormLabel>
            <Input name="state" value={value} onChange={onChange} type="text" placeholder="estado" size="sm" colorScheme="blue"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba la Provincia</FormHelperText> }
        </FormControl>
    )
}

export default StateAlojamientoInput;