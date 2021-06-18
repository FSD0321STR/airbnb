import React from "react";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem,
  Center,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function PasswordLogIn ({value,onChange,validation}) {
    return (
        <FormControl id="password">
          <FormLabel>Contraseña</FormLabel>
          <Input name="password" value={value} onChange={onChange} type="password" placeholder="contraseña" size="sm" />
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Min. 8 carácteres: 1 mayuscula, 1 minuscula, 1 número y un carácter especial.</FormHelperText> }
        </FormControl>
    );
}

export default PasswordLogIn;