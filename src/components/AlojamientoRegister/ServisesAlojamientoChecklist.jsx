import React from "react";
import { FormControl, FormLabel, Select, FormHelperText } from "@chakra-ui/react"

function ServisesAlojamientoChecklist({value,onChange,validation}) {
    return (
        <FormControl id="services" p={2}>
            <FormLabel fontSize="sm" m={1}>Servicios que incluye</FormLabel>
            <Select placeholder="Servicios que incluye" name="type" value={value} onChange={onChange} type="text" size="sm" colorScheme="blue" bg="Azure">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Elija los servicios que incluye</FormHelperText> }
        </FormControl>
    )
}

export default ServisesAlojamientoChecklist;