import React from "react";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem,
  Center,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function EmailLogIn ({value,onChange,validation}) {
    return (
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={value} onChange={onChange} type="email" placeholder="Email" size="sm" />
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Escriba su email</FormHelperText> }
        </FormControl>
    );
}

export default EmailLogIn;