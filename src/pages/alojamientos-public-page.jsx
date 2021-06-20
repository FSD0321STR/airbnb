import React from "react";
import { ChakraProvider, Grid, Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import NavBarRegisterLogin from "../components/NavBar/navBarRegisterLogin";

function AlojamientosPublicPage() {
    return (
        <ChakraProvider>
            <Grid position="fixed">
                <NavBarRegisterLogin />
            </Grid>
            <Box p="500" bgImage="url('./images/imagen_home.jpg')"/> 
            <Grid templateColumns="repeat(4, 1fr)" gap={4} marginTop="5%" marginLeft="10%" marginRight="8%" marginBlockEnd="5%">        
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
                </Box>
            </Grid>
            
        </ChakraProvider>
      );
}

export default AlojamientosPublicPage;