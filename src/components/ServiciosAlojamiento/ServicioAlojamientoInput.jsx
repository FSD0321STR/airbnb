import React from "react";
import { FormControl, Input, FormLabel } from "@chakra-ui/react"

function ServicioAlojamientoInput ({value,onChange}) {
    return (
        <FormControl id="servicioAlojamiento">
          <FormLabel fontSize="sm">Servicio de alojamiento</FormLabel>
          <Input name="servicioAlojamiento" value={value} onChange={onChange} type="text" placeholder="Servicio" size="sm" colorScheme="blue" />
        </FormControl>
    );
}

export default ServicioAlojamientoInput;