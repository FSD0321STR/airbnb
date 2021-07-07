import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function EditTitleServicioInput({value,onChange,validation}) {
    return (
        <FormControl id="name" p={2}>
            <FormLabel fontSize="sm" m={1}>Servicio de alojamiento</FormLabel>
            <Input name="name" value={value} onChange={onChange} type="text" placeholder="Nombre" size="sm" colorScheme="blue"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba el servicio</FormHelperText> }
        </FormControl>
    )
}

export default EditTitleServicioInput;