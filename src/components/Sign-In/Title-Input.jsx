import React from "react";
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem,
  Center,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function TitleInput () {
    return (
        <Box bg="grey" w="100%" p={4} color="black">
        Iniciar Sesión
        </Box>
    );
}

export default TitleInput;