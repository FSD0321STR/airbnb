import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button, Text } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function NavBar() {
    
  return (
    <Flex>
      <Box p={2}>
      <h2>Logo</h2>
      </Box>
      <Spacer />
      <Box p={2}>
      <Link to="/"><Button mr={2} colorScheme="blue">Home</Button></Link>
        <Menu>
        
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Usuario
          </MenuButton>
          <MenuList>
            <Link to="/user-register"><MenuItem>Register</MenuItem></Link>
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
  