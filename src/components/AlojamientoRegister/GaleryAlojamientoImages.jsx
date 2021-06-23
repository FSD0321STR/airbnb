import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function GaleryAlojamientoImages({value,onChange}) {
    return (
        <FormControl id="galery" p={2}>
            <FormLabel fontSize="sm" m={1}>Guarda imagenes del alojamiento</FormLabel>
            <Input name="galery" value={value} onChange={onChange} type="text" placeholder="Galeria-imagenes" size="sm" colorScheme="blue"/>
            { !value ? <FormHelperText fontSize="xs" color="red" mx={1}>Incorpore imágenes del alojamiento</FormHelperText> : ""}
        </FormControl>
    )
}

export default GaleryAlojamientoImages;