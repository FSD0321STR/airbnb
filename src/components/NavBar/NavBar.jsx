import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Flex, Box, Spacer, Menu, Image, MenuButton, MenuList, MenuItem, Button, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import useLocalStorageString from "../hooks/useLocalStorageString";
  
  function NavBar() {
    const [token,setToken] = useLocalStorageString("token", "");
    const [userId,setUserId] = useLocalStorageString("userId", "");
    const history = useHistory();
    
    function cerrarSession() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setToken("");
        setUserId("");
        history.push("/");
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
    }, [token]);
      
    return (
        <Flex paddingTop="1%" paddingLeft="1%" paddingRight="1%" paddingBottom="1%">
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
                { token ? <Button onClick={cerrarSession} mr={2} colorScheme="blue">Cerrar Sesión</Button> : "" }
                
                {
                    token ? (
                        <Menu>
                            <MenuButton as={Button} leftIcon={<HamburgerIcon />} rightIcon = {<ChevronDownIcon />}  borderRadius="md"> </MenuButton>
                                <MenuList>
                                    <Link to="/edit-user"><MenuItem>Editar usuario</MenuItem></Link>
                                    {/* <Link to="/alojamientos-favoritos"><MenuItem>Alojamientos Favoritos Usuario</MenuItem></Link> */}
                                    <Link to="/alojamiento-register"><MenuItem>Registro alojamiento Anfitrion</MenuItem></Link>
                                    <Link to="/alojamiento-edit"><MenuItem>Modificar alojamientos Anfitrion</MenuItem></Link>
                                    {/* <Link to="/alojamientos-anfitrion"><MenuItem>Listado alojamientos Anfitrion</MenuItem></Link> */}
                                    {/* <Link to="/"><MenuItem>Buscar alojamientos</MenuItem></Link> */}
                                    {/* <Link to="/"><MenuItem onClick={cerrarSession}>Cerrar Sesión</MenuItem></Link> */}
                                </MenuList>
                        </Menu>
                    ) : (
                        <Menu>
                            <MenuButton as={Button} leftIcon={<HamburgerIcon />} rightIcon = {<ChevronDownIcon />}  borderRadius="md"> </MenuButton>
                            <MenuList>
                                <Link to="/user-register"><MenuItem>Regístrate</MenuItem></Link>
                                <Link to="/user-login"><MenuItem>Iniciar Sesión</MenuItem></Link>
                                {/* <Link to="/edit-user"><MenuItem>Editar usuario</MenuItem></Link> */}
                                <Link to="/recuperar-contrasena"><MenuItem>Recuperar contraseña</MenuItem></Link>
                                {/* <Link to="/alojamiento-register"><MenuItem>Registro alojamientos Anfitrion</MenuItem></Link> */}
                                {/* <Link to="/alojamiento-edit"><MenuItem>Modificar alojamientos Anfitrion</MenuItem></Link> */}
                                {/* <Link to="/alojamientos-anfitrion"><MenuItem>Listado alojamientos Anfitrion</MenuItem></Link> */}
                                {/* <Link to="/alojamientos-favoritos"><MenuItem>Alojamientos Favoritos Usuario</MenuItem></Link> */}
                                {/* <Link to="/"><MenuItem>Buscar Alojamientos</MenuItem></Link> */}
                            </MenuList>
                            </Menu>
                    )
                }
                
            </Box>
        </Flex>
        );
      }
    
  export default NavBar;