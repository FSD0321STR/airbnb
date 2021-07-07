import React from "react";
import {Input, Box } from "@chakra-ui/react"

function FullName ({value,onChange,validation}) {
    return (
        <Box >
        Nombre
          <Input name="full name" value={value} onChange={onChange} type="email" placeholder="Nombre Completo" size="sm" colorScheme="blue" />
        </Box>
    );
}

export default FullName;