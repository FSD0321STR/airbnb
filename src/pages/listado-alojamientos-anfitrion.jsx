import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { useHistory } from "react-router-dom";
import { ChakraProvider, Grid, Box, Image, Flex, Badge, Text, Button, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import { getAlojamientosUserApi, deleteAlojamientoApi } from "../utils/apiTest";

function AlojamientosAnfitrionPage(urlData) {

    const history = useHistory();
    const userId = urlData.match.params.id;
    //console.log(userId);
    const [alojamientos,setAlojamientos] = useState([]);
    const [loading, setLoading] = useState(true);
    //console.log(userId);

    async function deleteAlojamiento(alojamientoId) {
        setLoading(true);
        await deleteAlojamientoApi(alojamientoId)
        .then(response => {
          if(response.messageError) {
            setRegisterError(response.messageError);
          } else {
            const newAlojamientos = alojamientos.alojamientos.filter(alojamiento => alojamiento._id !== alojamientoId);
            setAlojamientos({alojamientos: newAlojamientos});
            setLoading(false);
          }
        })
        .catch((error) => {
         Promise.reject(error);
        })
      }

    async function editAlojamiento(alojamientoId) {
        history.push(`/alojamiento/${alojamientoId}`);
    }


    useEffect( async () => {
        const alojamientos = await getAlojamientosUserApi(userId);

        setAlojamientos(alojamientos);
        //console.log(alojamientos);
        setLoading(false);
      }, []);

      if(loading) {
        return (
            <ChakraProvider>
           
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </ChakraProvider>
        )
      }

      let alojamientoImageObject = "";
      let alojamientoImageDataBuffer = "";
      let imageDataConvertBase64 = "";
    
    return (
        <ChakraProvider>
            <NavBar />
            
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>

            {alojamientos.alojamientos.map((alojamiento) => (
                
                alojamientoImageObject = alojamiento.files[0].img,
                alojamientoImageDataBuffer = Buffer.from(alojamientoImageObject.data).toString("base64"),
                imageDataConvertBase64 = `data:${alojamientoImageObject.contentType};base64,` + alojamientoImageDataBuffer,
                
                
                <Box key={alojamiento._id} p="5" maxW="320px" borderWidth="1px">
                <Image borderRadius="md" src={imageDataConvertBase64} />
                <Flex align="baseline" mt={2}>
                    {/* <Badge colorScheme="pink">Plus</Badge> */}
                    <Text
                    
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                    >
                    {alojamiento.location} &bull; {alojamiento.state}
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    {alojamiento.name}
                </Text>
                <Text mb={1} mt={2}>€{alojamiento.precio} / noche</Text>
                <hr />
                <Button mt={2} colorScheme="green" size="sm" onClick={() => editAlojamiento(alojamiento._id)}>
                    Editar
                </Button>
                <Button ml={2} mt={2} colorScheme="red" size="sm" onClick={() => { if (window.confirm('¿Estás seguro de eliminar el alojamiento?')) deleteAlojamiento(alojamiento._id) } }>
                    Eliminar
                </Button>
                </Box>
            )
            )}

            </Grid>
        </ChakraProvider>
      );
}

export default AlojamientosAnfitrionPage;