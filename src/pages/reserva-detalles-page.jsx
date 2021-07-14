import React from "react";
import { ChakraProvider, Grid, Box, Image, Flex, Container, Text, Button, Center, Heading } from "@chakra-ui/react";
import PopUp from "../components/Reservar-Habitación/Reserva-pagina";
import NavBar from "../components/NavBar/NavBar";

function ReservaPage () {
    return (

<Box>
    <NavBar />
    <Grid templateColumns="repeat(5, 1fr)" gap={6} p="5" maxW="300em" borderWidth="1px">
                <Box>
                <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                <Flex align="baseline" mt={2}>
                </Flex>
                </Box>
                <Box>
                <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                <Flex align="baseline" mt={2}>
                </Flex>
                </Box>
                <Box>
                <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                <Flex align="baseline" mt={2}>
                </Flex>
                </Box>
                <Box>
                <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                <Flex align="baseline" mt={2}>
                </Flex>
                </Box>
                <Box>
                <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                <Flex align="baseline" mt={2}>
                </Flex>
                </Box>
   </Grid>
   <br />
   <Heading color="#FF385C">Descripción:</Heading>
   <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Modern, Chic Penthouse with Mountain, City & Sea Views
   </Text>
   <br />
   <Center w="500px" >
     <Container>
   PISO ALTO Y EXCLUSIVO EN PASEO TAULAT ILLA DEL LLAC
   <br />
   <br />
En el prestigioso complejo ILLA DEL LLAC, uno de los emplazamientos arquitectónicos con mas servicios para los clientes más exigentes.
<br />
Disponemos de esta propiedad en una 19ª planta de altura, lo que le confiere gran entrada de sol y luz durante todas las horas del día y en todas sus estancias.
<br />
Desde su majestuosa terraza de 27,2 m2 dispondremos de unas espectaculares y privilegiadas vistas de casi 360º a la ciudad de Barcelona, divisando todo el frente marítimo, así como las montañas de Montjuic y Tibidabo.
<br />
La propiedad dispone de amplio y espacioso hall de entrada en forma circular el cual diferencia perfectamente la distribución de estancias. Amplio salón-comedor totalmente acristalado en el que inundan la luz y el sol y desde el cual accedemos a la terraza.
<br />
Cocina office totalmente equipada con elementos de calidad y grandes espacios de almacenamiento, muy luminosa y exterior debido a su gran ventanal. Suite principal, amplia, luminosa y exterior que dispone de baño con bañera y espacio distribuidor que actúa como vestidor, así como armarios empotrados de gran capacidad.
<br />
En el otro extremo de la propiedad encontramos 3 habitaciones (1 de ellas doble) y todas exteriores amplias y muy luminosas. Un segundo baño que actúa como anexo a la zona de noche
<br />
La propiedad dispone de 2 plazas de parking contiguas y un trastero de 7.5 m2, todo ello incluido en el precio de venta.
<br />
El complejo ILLA DEL LLAC dispone de todos los servicios que solo los productos de alta calidad y más exclusivos pueden ofrecer como:
<br />
-Servicio de conserjería
<br />
- 3 ascensores
<br />
- 2 pistas de Pádel
<br />
- 2 piscinas
<br />
- Gimnasio
<br />
- Salón Social para actividades privadas
<br />
- Zonas ajardinadas
<br />
Zona Diagonal Mar, junto al CC Diagonal Mar, metro L4 Fòrum, líneas de buses, supermercados, farmacias, parques de ocio, colegios, institutos, a 5 min caminando de la Platja de Llevant, acceso salida Ronda Litoral.
<br />
¡El piso de tus sueños existe!
     </Container>
   </Center>
   <PopUp />
</Box>
 );
}
export default ReservaPage;