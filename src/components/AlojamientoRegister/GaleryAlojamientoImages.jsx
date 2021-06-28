import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import * as FilePond from 'filepond';
import { parse } from 'filepond';
import 'filepond/dist/filepond.min.css';

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement);

function GaleryAlojamientoImages({value,onChange}) {
    return (
        <FormControl id="galery" p={2}>
            <FormLabel fontSize="sm" m={1}>Guarda imagenes del alojamiento</FormLabel>

            <Input name="galery" value={value} onChange={onChange} type="file" placeholder="Galeria-imagenes" size="sm" colorScheme="blue"/>
               
                   

        </FormControl>
    )
}

export default GaleryAlojamientoImages;