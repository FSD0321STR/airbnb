import React, {useEffect, useState} from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import { ChakraProvider,Icon,Table, Button, Box, SkeletonCircle, SkeletonText,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import NavBar from "../components/NavBar/NavBar";
import CreateServicioButton from "../components/ServiciosAlojamiento/CreateServicioButton"; 
import {deleteServicioAlojamientoApi, getAllServiciosAlojamientoApi, modifyServicioAlojamientoVisible} from "../utils/apiTest";

function ServiciosAlojamientoPage() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
  const [loading, setLoading] = useState(true);
  const [servicioAlojamiento,setServicioAlojamiento] = useState([]);

  useEffect( async () => {
    const  servicios  = await getAllServiciosAlojamientoApi();

    //console.log(servicios);
    setServicioAlojamiento(servicios);
    
    //console.log(tipos);
    //const {image: {img }} = user.user;
    //const bufferImage = Buffer.from(img.data).toString("base64");
    setLoading(false);
  }, []);

  async function refreshRecordsPage() {
    const  servicios  = await getAllServiciosAlojamientoApi();
    setServicioAlojamiento(servicios);
    
}

  async function modifyVisibleServicio(e) {
      const value = e.target.value;
      const id = e.target.id;
      await modifyServicioAlojamientoVisible(id,value)
      .then(response => {
        if(response.messageError) {
          setRegisterError(response.messageError);
        } else {
            setRegisterError(response.messageOk);
            refreshRecordsPage();
        }
      })
      .catch((error) => {
       Promise.reject(error);
      })
  }

    function editServicio(servicioId) {
        //console.log(servicioId);
        
        history.push(`/servicios-alojamientos/${servicioId}`);
    }

    async function deleteServicioAlojamiento(servicioId) {
      
        await deleteServicioAlojamientoApi(servicioId)
        .then(response => {
          if(response.messageError) {
            setRegisterError(response.messageError);
          } else {
            const newServicios = servicioAlojamiento.servicios.filter(servicio => servicio._id !== servicioId);
            setServicioAlojamiento({servicios: newServicios});
            setRegisterError(response.messageOk);
          }
        })
        .catch((error) => {
         Promise.reject(error);
        })
      }

    if(loading) {
    return (
        <ChakraProvider>
          <NavBar />
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </ChakraProvider>
      )
    }  

    return (
        <ChakraProvider>
          <NavBar />
          
          <Table size="sm">
            <Thead>
                <Tr>
                <Th>Servicio</Th>
                <Th>Visible</Th>
                <Th>Editar</Th>
                <Th>Eliminar</Th>
                </Tr>
            </Thead>
            <Tbody>

                
                {servicioAlojamiento.servicios.map((servicio) => (
                    <Tr key={servicio._id}>
              <Td>{`${servicio.title}`}</Td>
                <Td>{servicio.visible ? <Checkbox onChange={modifyVisibleServicio} id={servicio._id} value={true} defaultIsChecked></Checkbox> : <Checkbox onChange={modifyVisibleServicio} id={servicio._id} value={false}></Checkbox>}</Td>
                <Td >
                <Button py={4} onClick={() => editServicio(servicio._id)} colorScheme="teal" size="xs">
                  <Icon as={MdModeEdit} w={4} h={4} />
                </Button>
                </Td>
                <Td >
                {/* <Button onClick={() => deleteUser(user._id)} colorScheme="red" size="xs">
                
                </Button> */}
                <Button py={4} onClick={() => { if (window.confirm('¿Estás seguro de eliminar el servicio?')) deleteServicioAlojamiento(servicio._id) } } colorScheme="red" size="xs">
                  <Icon as={MdDeleteForever} w={4} h={4} />
                </Button>
                
                </Td>
              </Tr>
            ))}
                    
                
                
            </Tbody>
            
            </Table>
            <CreateServicioButton></CreateServicioButton>
        </ChakraProvider>
    )
}

export default ServiciosAlojamientoPage;