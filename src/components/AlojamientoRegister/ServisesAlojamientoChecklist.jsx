import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function ServisesAlojamientoChecklist({value,onChange,validation}) {
    return (
        <FormControl id="services" p={2}>
            <FormLabel fontSize="sm" m={1}>Servicios que incluye</FormLabel>
            <Input name="services" value={value} onChange={onChange} type="text" placeholder="Servicios" size="sm" colorScheme="blue"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Elija los servicios que incluye</FormHelperText> }
        </FormControl>
    )
}

export default ServisesAlojamientoChecklist;