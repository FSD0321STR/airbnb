import React from "react";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem,
  Center,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function Submit () {
    return (
        <Button type="submit" colorScheme="teal" variant="solid">
          Sign In
        </Button>
    );
}

export default Submit;