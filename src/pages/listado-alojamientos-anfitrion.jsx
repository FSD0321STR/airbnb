import React, { useEffect, useState } from "react";
import { ChakraProvider, Grid, Box, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import { getAlojamientosUserApi } from "../utils/apiTest";

function AlojamientosAnfitrionPage(urlData) {

    const userId = urlData.match.params.id;
    //console.log(userId);
    const [alojamientos,setAlojamientos] = useState([]);
    const [loading, setLoading] = useState(true);
    //console.log(userId);

    useEffect( async () => {
        const alojamientos = await getAlojamientosUserApi(userId);
        setAlojamientos(alojamientos);
        setLoading(false);
      }, []);

      if(loading) {
        return (
            <p>Cargando datos...</p>
          )
        }

    
    return (
        <ChakraProvider>
            <NavBar />
            
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>

            {alojamientos.alojamientos.map((alojamiento) => (
                <Box key={alojamiento._id} p="5" maxW="320px" borderWidth="1px">
                <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                    >
                    Verified &bull; Cape Town
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    {alojamiento.name}
                </Text>
                <Text mb={1} mt={2}>€{alojamiento.precio}/night</Text>
                <hr />
                <Button mt={2} colorScheme="green" size="sm">
                    Editar
                </Button>
                <Button ml={2} mt={2} colorScheme="red" size="sm">
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