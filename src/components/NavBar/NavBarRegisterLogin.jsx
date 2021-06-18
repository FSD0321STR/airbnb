import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu, Image,
  MenuButton,
  MenuList,
  MenuItem,
  Button, Text } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'


function NavBarRegisterLogin() {
    
  return (
    <Flex paddingTop="1%" paddingLeft="1%" paddingRight="1%" paddingFoot="1%">
      <Box p={2}>
        <Image w={40} h={12} src="./images/airbnb-logo.png"/> 
      </Box>
        <Spacer />
      <Box p={2}>
      <Link to="/"><Button mr={2} colorScheme="blue">Hazte anfitrión</Button></Link>
        <Menu>
          <MenuButton as={Button} leftIcon={<HamburgerIcon />} rightIcon = {<ChevronDownIcon />}  borderRadius="md"> </MenuButton>
          <MenuList>
              <Link to="/user-register"><MenuItem>Regístrate</MenuItem></Link>
              <Link to="/edit-user"><MenuItem>Inicia Sesión</MenuItem></Link>
              <Link to="/user-register"><MenuItem>Ofrece tu alojamiento</MenuItem></Link>
              <Link to="/user-register"><MenuItem>Ofrece una experiencia</MenuItem></Link>
              <Link to="/user-register"><MenuItem>Ayuda</MenuItem></Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    );
  }
  
  export default NavBarRegisterLogin;
  