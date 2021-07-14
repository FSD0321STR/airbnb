import React, { useState, useEffect } from "react";
import { ChakraProvider, Grid, Box, Image, Flex, Badge, Text, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Buffer } from "buffer";
import NavBar from "../components/NavBar/NavBar";
import { getAllAlojamientos } from "../utils/apiTest";
import imgHome from "../components/images/imagen-home.jpg";

function AlojamientosPublicPage() {

    const [alojamientos,setAlojamientos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( async () => {
        const alojamientos = await getAllAlojamientos();
        //console.log(alojamientos);
        setAlojamientos(alojamientos);
        //console.log(alojamientos);
        setLoading(false);
      }, []);

      let alojamientoImageObject = "";
      let alojamientoImageDataBuffer = "";
      let imageDataConvertBase64 = "";


      if(loading) {
        return (
            <ChakraProvider>
                <Box position="fixed" width="100%" backgroundColor="#fff">
                <NavBar />
            </Box>
          <hr />
            <Box mt="60px" padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </ChakraProvider>
        )
      }

    
    return (
        <ChakraProvider>
            <Box position="fixed" width="100%" backgroundColor="#fff">
                <NavBar />
            </Box>
          <hr />
            
          

            <Box p="400" bgImage={imgHome}/> 
            <Grid templateColumns="repeat(4, 1fr)" gap={4} marginTop="5%" marginLeft="10%" marginRight="8%" marginBlockEnd="5%">   

            {alojamientos.alojamientos.map((alojamiento) => (
                
                alojamientoImageObject = alojamiento.files[0].img,
                alojamientoImageDataBuffer = Buffer.from(alojamientoImageObject.data).toString("base64"),
                imageDataConvertBase64 = `data:${alojamientoImageObject.contentType};base64,` + alojamientoImageDataBuffer,

                <Box key={alojamiento._id} p="5" maxW="320px" borderWidth="1px">
                <Image borderRadius="md" src={imageDataConvertBase64} />
                <Flex align="baseline" mt={2}>
                    {/* <Badge colorScheme="pink">Plus</Badge> */}
                    <Text
                    ml={2}
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
                </Box>
                ))
          }
                
            </Grid>
            
        </ChakraProvider>
      );
}

export default AlojamientosPublicPage;