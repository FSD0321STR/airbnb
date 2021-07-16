import React, {useEffect, useState} from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import { ChakraProvider,Icon,Table, Button, Box, SkeletonCircle, SkeletonText,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,} from "@chakra-ui/react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import EditUserForm from '../components/UserRegister/EditUserForm';
import NavBar from "../components/NavBar/NavBar";
import {deleteUserApi, getAllUserApi} from "../utils/apiTest";

function DeleteUserPage() {
  const history = useHistory();
  const [registerError,setRegisterError] = useState("");
  const [loading, setLoading] = useState(true);
  const [users,setUser] = useState([]);

  useEffect( async () => {
    const  users  = await getAllUserApi();
    setUser(users);
    
    //console.log(users);
    //const {image: {img }} = user.user;
    //const bufferImage = Buffer.from(img.data).toString("base64");
    setLoading(false);
  }, []);

    function editUsers(userId) {
        //console.log(userId);
        
        history.push(`/users/${userId}`);
    }

    async function deleteUser(userId) {
      
        await deleteUserApi(userId)
        .then(response => {
          if(response.messageError) {
            setRegisterError(response.messageError);
          } else {
            const newUsers = users.users.filter(user => user._id !== userId);
            setUser({users: newUsers});
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
          <Box marginLeft= "8rem" marginRight= "50" marginTop= "5rem" marginBottom= "10">
            <Table size="sm"  >
              <Thead>
                  <Tr>
                  <Th>Nombre y apellidos</Th>
                  <Th>Email</Th>
                  <Th>Rol</Th>
                  <Th>Editar</Th>
                  <Th>Eliminar</Th>
                  </Tr>
              </Thead>
              <Tbody>

                  
                  {users.users.map((user) => (
                      <Tr key={user._id}>
                <Td>{`${user.name} ${user.lastName}`}</Td>
                  <Td>{user.email}</Td>
                  <Td >{user.rol}</Td>
                  <Td >
                  <Button py={4} onClick={() => editUsers(user._id)} colorScheme="teal" size="xs">
                    <Icon as={MdModeEdit} w={4} h={4} />
                  </Button>
                  </Td>
                  <Td >
                  {/* <Button onClick={() => deleteUser(user._id)} colorScheme="red" size="xs">
                  
                  </Button> */}
                  <Button py={4} onClick={() => { if (window.confirm('¿Estás seguro de eliminar el usuario?')) deleteUser(user._id) } } colorScheme="red" size="xs">
                    <Icon as={MdDeleteForever} w={4} h={4} />
                  </Button>
                  
                  </Td>
                </Tr>
              ))}
                      
                  
                  
              </Tbody>
              
            </Table>
          </Box>
        </ChakraProvider>
    )
}

export default DeleteUserPage;