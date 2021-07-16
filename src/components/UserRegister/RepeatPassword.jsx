import React from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"

function RepeatPasswordInput({value,onChange,validation}) {
    return (
        <FormControl id="repeatPassword" p={2}>
            <FormLabel fontSize="sm" m={1}>Repetir Contraseña</FormLabel>
            <Input name="repitePassword" value={value} onChange={onChange} type="password" placeholder="repetir contraseña" size="sm"  bg="Azure"/>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>La contraseña no coincide.</FormHelperText> }
        </FormControl>
    )
}

export default RepeatPasswordInput;