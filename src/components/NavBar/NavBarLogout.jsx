import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu, Image, MenuButton, MenuList, MenuItem, Button, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
  
  function NavBarLogout() {
      
    return (
        <Flex paddingTop="1%" paddingLeft="1%" paddingRight="1%" paddingFoot="1%">
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
                <Link to="/"><Button mr={2} colorScheme="blue">Cerrar Sesión</Button></Link>
                <Menu>
                    <MenuButton as={Button} leftIcon={<HamburgerIcon />} rightIcon = {<ChevronDownIcon />}  borderRadius="md"> </MenuButton>
                        <MenuList>
                            <Link to="/edit-user"><MenuItem>Home</MenuItem></Link>
                            <Link to="/alojamientos-favoritos"><MenuItem>Listado Alojamientos Favoritos</MenuItem></Link>
                            <Link to="/alojamientos-anfitrion"><MenuItem>Editar alojamientos como anfitrión</MenuItem></Link>
                            <Link to="/"><MenuItem>Buscar alojamientos</MenuItem></Link>
                            <Link to="/"><MenuItem>Cerrar Sesión</MenuItem></Link>
                        </MenuList>
                </Menu>
            </Box>
        </Flex>
        );
      }
    
  export default NavBarLogout;