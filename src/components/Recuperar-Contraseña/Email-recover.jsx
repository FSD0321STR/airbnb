import React from "react";
import { FormControl, Input, FormLabel, FormHelperText } from "@chakra-ui/react"

function EmailPasswordRecover ({value,onChange,validation}) {
    return (
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input name="email" value={value} onChange={onChange} type="email" placeholder="Email" size="sm" colorScheme="blue" bg="Azure" />
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba su email</FormHelperText> }
        </FormControl>
    );
}

export default EmailPasswordRecover;