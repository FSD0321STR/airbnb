import React from "react";
import {Box,chakra, Container, Stack, Text, useColorModeValue,VisuallyHidden,Spacer} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  
  const SocialButton = ({children,label, href}) => {
            return (
              <chakra.button 
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} 
                rounded={'full'} 
                w={8} h={8} 
                cursor={'pointer'}
                as={'a'}
                href={href}
                display={'inline-flex'}
                alignItems={'center'}
                justifyContent={'center'}
                transition={'background 0.3s ease'}
                _hover={{
                  bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                }}>
                <VisuallyHidden>{label}</VisuallyHidden>
                {children}
              </chakra.button>
            );
          };
          
function FooterSimple() {
            return (
              <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.800', 'gray.400')} marginTop="5rem">
                <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} 
                justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
                  <Text>© 2021 Airbnb</Text><Spacer/> 
                  <Text href="https://www.airbnb.es/help/article/2855/pol%C3%ADtica-de-privacidad">·Privacidad</Text>
                  <Text href="https://www.airbnb.es/help/article/2908/t%C3%A9rminos-de-servicio" isExternal>·Condiciones</Text>
                  <Text href="https://www.airbnb.es/about/company-details" isExternal>·Datos de la empresa</Text>
                  <Spacer/>
                  <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/airbnb_es'} >
                      <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCCww-R0oM_CQWXerBcNyKKw'}>
                      <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/airbnb/'}>
                      <FaInstagram />
                    </SocialButton>
                  </Stack>
                </Container>
              </Box>
            );
          }

  export default FooterSimple;