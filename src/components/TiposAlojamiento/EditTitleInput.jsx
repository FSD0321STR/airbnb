import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function EditTitleInput({value,onChange,validation}) {
    return (
        <FormControl id="name" p={2}>
            <FormLabel fontSize="sm" m={1}>Tipo de alojamiento</FormLabel>
            <Input name="name" value={value} onChange={onChange} type="text" placeholder="Nombre" size="sm" colorScheme="blue"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba el tipo de alojamiento</FormHelperText> }
        </FormControl>
    )
}

export default EditTitleInput;