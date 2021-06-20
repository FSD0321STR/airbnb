import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu, Image,
  MenuButton,
  MenuList,
  MenuItem,
  Button, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons'


function NavBarRegisterLogin() {
    
  return (
    <Flex paddingTop="1%" paddingLeft="1%" paddingRight="1%">
      <Box p={2}>
        <Image w={40} h={12} src="./images/airbnb-logo.png"/> 
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
      <Link to="/user-register"><Button mr={2} colorScheme="blue">Hazte anfitrión</Button></Link>
        <Menu>
          <MenuButton as={Button} leftIcon={<HamburgerIcon />} rightIcon = {<ChevronDownIcon />}  borderRadius="md"> </MenuButton>
          <MenuList>
              <Link to="/user-register"><MenuItem>Regístrate</MenuItem></Link>
              <Link to="/user-login"><MenuItem>Iniciar Sesión</MenuItem></Link>
              <Link to="/"><MenuItem>Buscar Alojamientos</MenuItem></Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    );
  }
  
  export default NavBarRegisterLogin;
  