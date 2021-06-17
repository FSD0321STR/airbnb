import React from "react";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem,
  Center,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function EmailLogIn () {
    return (
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
    );
}

export default EmailLogIn;