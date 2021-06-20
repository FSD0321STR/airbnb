import React from "react";
import { ChakraProvider, Grid, Box, Image, Flex, Badge, Text, Wrap,WrapItem, Center } from "@chakra-ui/react";
import NavBarRegisterLogin from "../components/NavBar/navBarRegisterLogin";

function AlojamientosPublicPage() {
    return (
        <ChakraProvider>
            <Grid>
            <NavBarRegisterLogin />
            </Grid>
            <p>HOME</p>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} marginTop="50%" marginLeft="3%">
                <Wrap spacing="30px" >
                    <WrapItem>
                        
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
                        
                    </WrapItem>
                    <WrapItem>
                        <Center w="80%" h="40%" bg="red.200">
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
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w="80%" h="40%" bg="red.200">
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
                        </Center>
                    </WrapItem>   
                </Wrap>
            </Grid>
            
        </ChakraProvider>
      );
}

export default AlojamientosPublicPage;