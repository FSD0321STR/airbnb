import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button, Image } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function NavBar() {
    
  return (
    <Flex>
      <Box p={2}>
      <h2>Logo</h2>
      </Box>
      <Spacer />
      <Box p={2}>
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Register</MenuItem>
            <MenuItem>Editar mis datos</MenuItem>
            <MenuItem>Editar mis alojamientis</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    );
  }
  
  export default NavBar;
  