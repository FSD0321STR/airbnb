import React from "react";
import { ChakraProvider, Grid, Box, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import imgHome from "../../images/home/imagen-home-2.jpg";

function AlojamientosFavoritosPage() {
    return (
        <ChakraProvider>
            <NavBar />
            <Text>LITADO DE ALOJAMIENTOS FAVORITOS DEL USUARIO</Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={1} bgImage={imgHome}>
                <Box p="5" maxW="320px" borderWidth="1px">
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
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                </Text>
                <Text mb={1} mt={2}>€119/night</Text>
                <hr />
                <Button mt={2} colorScheme="green" size="sm">
                    Editar
                </Button>
                <Button ml={2} mt={2} colorScheme="red" size="sm">
                    Eliminar
                </Button>
                </Box>
                <Box p="5" maxW="320px" borderWidth="1px">
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
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                </Text>
                <Text mb={1} mt={2}>€119/night</Text>
                <hr />
                <Button mt={2} colorScheme="green" size="sm">
                    Editar
                </Button>
                <Button ml={2} mt={2} colorScheme="red" size="sm">
                    Eliminar
                </Button>
                </Box>
                <Box p="5" maxW="320px" borderWidth="1px">
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
                    Modern, Chic Penthouse with Mountain, City & Sea Views
                </Text>
                <Text mb={1} mt={2}>€119/night</Text>
                <hr />
                <Button mt={2} colorScheme="green" size="sm">
                    Editar
                </Button>
                <Button ml={2} mt={2} colorScheme="red" size="sm">
                    Eliminar
                </Button>
                </Box>
            </Grid>
        </ChakraProvider>
      );
}

export default AlojamientosFavoritosPage;