import React from "react";
import "filepond/dist/filepond.min.css";
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import FilesImages from "../hooks/fieldPondPluginImage"

function GaleryAlojamientoImages({value,onChange}) {
    return (
        <FormControl id="galery" p={2}>
            <FormLabel fontSize="sm" m={1}>Guarda imagenes del alojamiento</FormLabel>
            <FilesImages></FilesImages>
        </FormControl>
    )
}

export default GaleryAlojamientoImages;

