import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function EmailInput({value,onChange,validation}) {
    return (
        <FormControl id="email" p={2}>
            <FormLabel fontSize="sm"  m={1}>Email</FormLabel>
            <Input name="email" value={value} onChange={onChange} type="email" placeholder="Email" size="sm" colorScheme="blue"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba su email</FormHelperText> }
        </FormControl>
    )
}

export default EmailInput;