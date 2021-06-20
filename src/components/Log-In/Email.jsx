import React from "react";
import { FormControl, Input, FormLabel, FormHelperText } from "@chakra-ui/react"

function EmailLogIn ({value,onChange,validation}) {
    return (
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={value} onChange={onChange} type="email" placeholder="Email" size="sm" colorScheme="blue" />
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba su email</FormHelperText> }
        </FormControl>
    );
}

export default EmailLogIn;