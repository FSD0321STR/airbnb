import React from "react";
import { FormControl, Input, FormLabel, FormHelperText } from "@chakra-ui/react"

function RepitePasswordInputRecover ({value,onChange,validation}) {
    return (
        <FormControl id="repitePassword">
          <FormLabel>Password</FormLabel>
          <Input name="repitePassword" value={value} onChange={onChange} type="password" placeholder="Repite Password" size="sm" colorScheme="blue" />
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>La contraseña no coincide.</FormHelperText> }
        </FormControl>
    );
}

export default RepitePasswordInputRecover;