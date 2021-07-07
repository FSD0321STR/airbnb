import React from "react";
import { FormControl, Input, FormLabel } from "@chakra-ui/react"

function TipoAlojamientoInput ({value,onChange}) {
    return (
        <FormControl id="tipoAlojamiento">
          <FormLabel fontSize="sm">Tipo de alojamiento</FormLabel>
          <Input name="tipoAlojamiento" value={value} onChange={onChange} type="text" placeholder="Tipo de alojamiento" size="sm" colorScheme="blue" />
        </FormControl>
    );
}

export default TipoAlojamientoInput;