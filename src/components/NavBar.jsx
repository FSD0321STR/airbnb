import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'

function NavBar() {
    
  return (
    <Flex>
      <Box p={2}>
      <h2>Logo</h2>
      </Box>
      <Spacer />
      <Box p={2}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" />}
        />
        <Input type="text" placeholder="busca un alojamiento" />
      </InputGroup>
      </Box>
      <Box p={2}>
      <Link to="/"><Button mr={2} colorScheme="blue">Home</Button></Link>
        <Menu>
        
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Usuario
          </MenuButton>
          <MenuList>
            <Link to="/user-register"><MenuItem>Register</MenuItem></Link>
            <Link to="/edit-user"><MenuItem>Editar mis datos</MenuItem></Link>
            <Link to="/alojamientos-user"><MenuItem>Editar mis alojamientis</MenuItem></Link>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    );
  }
  
  export default NavBar;
  