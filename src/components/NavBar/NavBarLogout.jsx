import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu, Image,
    MenuButton,
    MenuList,
    MenuItem,
    Button, Text } from "@chakra-ui/react"
    import { ChevronDownIcon } from '@chakra-ui/icons'
  
  function NavBarLogout() {
      
    return (
      <Flex>
        <Box p={2}>
           <Image  w={5} h={5} src="./images/airbnb-logo.png" />
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
                    <Link to="/edit-user"><MenuItem>Editar mis datos</MenuItem></Link>
                    <MenuItem>Editar mis alojamientis</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Menu>
        </Box>
      </Flex>
      );
    }
    
  export default NavBarLogout;