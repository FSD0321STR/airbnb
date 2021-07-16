import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";
import { ChakraProvider, Grid, Box, Image, Flex, Container, Text, Button, Center, Heading, SkeletonCircle, SkeletonText, } from "@chakra-ui/react";
import PopUp from "../components/Reservar-Habitación/Reserva-pagina";
import NavBar from "../components/NavBar/NavBar";
import { getAlojamientoApi } from "../utils/apiTest";
import { MdAlarmAdd } from "react-icons/md";
import imgHome from "../../images/home/imagen-home-2.jpg";

function DetalleAlojamiento (urlData) {

  const alojamientoId = urlData.match.params.id;
  //console.log(alojamientoId);

  const [alojamiento,setAlojamientos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( async () => {
    const alojamiento = await getAlojamientoApi(alojamientoId);
    //console.log(alojamiento);
    setAlojamientos(alojamiento);
    //console.log(alojamientos);
    setLoading(false);
  }, []);

  let alojamientoImageObject = "";
  let alojamientoImageDataBuffer = "";
  let imageDataConvertBase64 = "";
  //let imagesArray = [];

  if(loading) {
    return (
        <ChakraProvider>
            <Box position="fixed" width="100%" backgroundColor="#fff">
            <NavBar />
        </Box>
      <hr />
        <Box mt="60px" padding="6" boxShadow="lg" bg="white" bgImage={imgHome}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </ChakraProvider>
    )
  }

  //console.log(alojamiento.alojamiento.files);

    return (
      

<Box>
    <NavBar />

    

    

    <Grid id="aaa" templateColumns="repeat(5, 1fr)" gap={6} p="5" maxW="300em" borderWidth="1px">

    {
      alojamiento.alojamiento.files.map((alojamiento) => (
        alojamientoImageObject = alojamiento.img,
        alojamientoImageDataBuffer = Buffer.from(alojamientoImageObject.data).toString("base64"),
        imageDataConvertBase64 = `data:${alojamientoImageObject.contentType};base64,` + alojamientoImageDataBuffer,
        //imagesArray.push(imageDataConvertBase64),
        //console.log(imagesArray);
      
        <Box key={alojamiento._id}>
          <Image borderRadius="md" src={imageDataConvertBase64} />
        </Box>
      
      
      ))
    }
  
    
  
{/* <Box>
          <Image borderRadius="md" src={imageDataConvertBase64} />
        </Box> */}

                
                
   </Grid>
   <br />

   
   
   <Text ml={2} mt={2} fontSize="xl" color="#ff1100" fontWeight="semibold" lineHeight="short">
                    {alojamiento.alojamiento.name}
   </Text>
   <Text ml={2}>
     <strong>Tipo de alojamieno:</strong> {alojamiento.alojamiento.type}
   </Text>
   <Text ml={2}>
     <strong>Número de huéspedes:</strong> {alojamiento.alojamiento.numberGuests}
   </Text>
   <Text ml={2}>
     <strong>Población:</strong> {alojamiento.alojamiento.location}
   </Text>
   <Text ml={2}>
     <strong>Provincia:</strong> {alojamiento.alojamiento.state}
   </Text>
   <Text ml={2}>
     <strong>Servicios que incluye:</strong> {alojamiento.alojamiento.services}
   </Text>
   <Text ml={2}>
     <strong>Precio por noche:</strong> € {alojamiento.alojamiento.precio}
   </Text>
   
   <Text ml={2}>
   <strong>Descripción:</strong> {alojamiento.alojamiento.description}
   </Text>
   
   
   <Box ml={2}>
   
</Box>  
   
   <PopUp />
</Box>
 );
}
export default DetalleAlojamiento;