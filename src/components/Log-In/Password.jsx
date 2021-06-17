import React from "react";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem,
  Center,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function PasswordLogIn () {
    return (
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
    );
}

export default PasswordLogIn;