import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Flex, Box, Spacer, Menu, Image, MenuButton, MenuList, MenuItem, Button, InputGroup, InputLeftElement, InputRightElement, Input } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import useLocalStorageString from "../hooks/useLocalStorageString";
import useLocalStorageArray from "../hooks/useLocalStorageArray";
import logoApp from "../../../images/logo airbnb/airbnb-logo.png";

  
  function NavBar({onSubmit}) {
    const [token,setToken] = useLocalStorageString("token", "");
    const [userId,setUserId] = useLocalStorageString("userId", "aa");
    const [rol,setRol] = useLocalStorageArray("rol", "");
    const [userIdAlojamientos,setUserIdAlojamientos] = useState("");
    const [searchText,setSearchText] = useState("");
    const history = useHistory();

   function search(event) {
        event.preventDefault();
        console.log('aaa');
   }

   function getSearchText(e) {
    const actualSearchText = e.target.value;
    setSearchText(actualSearchText);
}

   function aaa(event) {
    event.preventDefault();
    onSubmit( { text: searchText }
    );
    setSearchText("");
   }
    
    function cerrarSession() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("rol");
        setToken("");
        history.push("/")
    }

    //console.log(token);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const rol = JSON.parse(localStorage.getItem("rol"));
        const urlId = localStorage.getItem("userId");
      
        if(urlId===null || urlId==="") {
            
        } else {
            setUserIdAlojamientos(JSON.parse(urlId).id);
        }
    
    }, [token]);

      
    return (
        <Flex paddingTop="1%" paddingLeft="1%" paddingRight="1%" paddingBottom="1%">
            <Box p={2}>
                <Link to="/"><Image w={40} h={12} src={logoApp}/></Link>
            </Box>
            <Spacer />
            <Box p={2}>
            <form onSubmit={aaa}>
            <InputGroup>
            
                <InputLeftElement
                
                children={<Button type="submit"><SearchIcon color="gray.500" /></Button>}
                />
                <Input type="text" name="search" value={searchText} onChange={getSearchText} placeholder="busca un alojamiento" />
                
               
            </InputGroup>
            </form>
            </Box>
            <Box p={2}>
                { token ? <Button onClick={cerrarSession} mr={2} colorScheme="blue">Cerrar Sesión</Button> : "" }
                
                {
                    token ? (
                        <Menu>
                            <MenuButton as={Button} leftIcon={<HamburgerIcon />} rightIcon = {<ChevronDownIcon />}  borderRadius="md"> </MenuButton>
                                <MenuList>
                                    <Link to="/"><MenuItem>Inicio</MenuItem></Link>
                                    <Link to="/edit-user"><MenuItem>Editar mis datos</MenuItem></Link>
                                    {/* <Link to="/alojamientos-favoritos"><MenuItem>Alojamientos Favoritos Usuario</MenuItem></Link> */}
                                    <Link to="/alojamiento-register"><MenuItem>Subir un alojamiento</MenuItem></Link>
                                    <Link to={`/alojamientos-anfitrion/${userIdAlojamientos}`}><MenuItem>Modificar mis alojamientos</MenuItem></Link>
                                    {
                                        rol.rol === "admin" ? (
                                            <>
                                            <Link to="/users"><MenuItem>Lista de usuarios</MenuItem></Link>
                                            <Link to="/tipo-alojamiento"><MenuItem>Tipo de alojamiento</MenuItem></Link>
                                            <Link to="/servicios-alojamiento"><MenuItem>Servicios de alojamiento</MenuItem></Link>
                                            </>
                                        ) : (
                                            ""
                                        )
                                    }
                                    
                                    {/* <Link to="/alojamientos-anfitrion"><MenuItem>Listado alojamientos Anfitrion</MenuItem></Link> */}
                                    {/* <Link to="/"><MenuItem>Buscar alojamientos</MenuItem></Link> */}
                                    {/* <Link to="/"><MenuItem onClick={cerrarSession}>Cerrar Sesión</MenuItem></Link> */}
                                </MenuList>
                        </Menu>
                    ) : (
                        <Menu>
                            <MenuButton as={Button} leftIcon={<HamburgerIcon />} rightIcon = {<ChevronDownIcon />}  borderRadius="md"> </MenuButton>
                            <MenuList>
                                <Link to="/"><MenuItem>Inicio</MenuItem></Link>
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