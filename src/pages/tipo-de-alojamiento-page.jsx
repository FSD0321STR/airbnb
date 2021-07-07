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
import CreateTipoButton from "../components/TiposAlojamiento/CreateTipoButton"; 
import {deleteTipoAlojamientoApi, getAllTipoAlojamientoApi, modifyTipoAlojamientoVisible} from "../utils/apiTest";

function TipoAlojamientoPage() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
  const [loading, setLoading] = useState(true);
  const [tipoAlojamiento,setTipoAlojamiento] = useState([]);

  useEffect( async () => {
    const  tipos  = await getAllTipoAlojamientoApi();
    setTipoAlojamiento(tipos);
    
    //console.log(tipos);
    //const {image: {img }} = user.user;
    //const bufferImage = Buffer.from(img.data).toString("base64");
    setLoading(false);
  }, []);

  async function refreshRecordsPage() {
    const  tipos  = await getAllTipoAlojamientoApi();
    setTipoAlojamiento(tipos);
    
}

  async function modifyVisibleTipo(e) {
      const value = e.target.value;
      const id = e.target.id;
      await modifyTipoAlojamientoVisible(id,value)
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

    function editTipo(userId) {
        //console.log(userId);
        
        history.push(`/tipos-alojamientos/${userId}`);
    }

    async function deleteTipoAlojamiento(tipoId) {
      
        await deleteTipoAlojamientoApi(tipoId)
        .then(response => {
          if(response.messageError) {
            setRegisterError(response.messageError);
          } else {
            const newTipos = tipoAlojamiento.tipos.filter(tipo => tipo._id !== tipoId);
            setTipoAlojamiento({tipos: newTipos});
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
                <Th>Tipo de alojamiento</Th>
                <Th>Visible</Th>
                <Th>Editar</Th>
                <Th>Eliminar</Th>
                </Tr>
            </Thead>
            <Tbody>

                
                {tipoAlojamiento.tipos.map((tipo) => (
                    <Tr key={tipo._id}>
              <Td>{`${tipo.title}`}</Td>
                <Td>{tipo.visible ? <Checkbox onChange={modifyVisibleTipo} id={tipo._id} value={true} defaultIsChecked></Checkbox> : <Checkbox onChange={modifyVisibleTipo} id={tipo._id} value={false}></Checkbox>}</Td>
                <Td >
                <Button py={4} onClick={() => editTipo(tipo._id)} colorScheme="teal" size="xs">
                  <Icon as={MdModeEdit} w={4} h={4} />
                </Button>
                </Td>
                <Td >
                {/* <Button onClick={() => deleteUser(user._id)} colorScheme="red" size="xs">
                
                </Button> */}
                <Button py={4} onClick={() => { if (window.confirm('¿Estás seguro de eliminar el tipo de alojamiento?')) deleteTipoAlojamiento(tipo._id) } } colorScheme="red" size="xs">
                  <Icon as={MdDeleteForever} w={4} h={4} />
                </Button>
                
                </Td>
              </Tr>
            ))}
                    
                
                
            </Tbody>
            
            </Table>
            <CreateTipoButton></CreateTipoButton>
        </ChakraProvider>
    )
}

export default TipoAlojamientoPage;