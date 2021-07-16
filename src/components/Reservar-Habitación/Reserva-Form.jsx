import emailjs from "emailjs-com";
import React from 'react';
import { Flex, Center, Grid, Input, Textarea, Box, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from "@chakra-ui/react";
    import {
        RangeDatePicker,
      } from "react-google-flight-datepicker";
      import "react-google-flight-datepicker/dist/main.css";

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_kz90quv', 'template_epygd4w', e.target, 'user_ACiPpdqIps9tGoPMEb7HP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <Flex>
            <form onSubmit={sendEmail}>
<<<<<<< HEAD
                    <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "41rem" marginBottom="15rem" border="ridge" bg="#FF385C" borderRadius="md">
                        <Center w="500px" textAlign='center'>
                            <Input type="text" className="form-control" border="solid" placeholder="Name" name="name" colorScheme="blue" size="sm" m={2}/>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Input type="email" className="form-control" border="solid" placeholder="Email Address" name="email"/>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Input type="text" className="form-control" border="solid" placeholder="Subject" name="subject"/>
                        </Center>
                        <Center w="500px" textAlign='center'>
                        <RangeDatePicker name="date" />
                        </Center>
                        <Center w="500px" textAlign='center'>
                        <Input type="text" className="form-control" border="solid" placeholder="¿Qué días viajaras?" name="date"/>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Textarea className="form-control" id="" cols="30" rows="8" border="solid" placeholder="Your message" name="message"></Textarea>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Input type="submit" className="btn btn-info" border="solid" background="white" value="Send Message"></Input>
                        </Center>
=======
                    <Grid templateColumns="repeat(1, 1fr)" gap={2} marginTop="1rem" border="ridge" bg="#FFffff" borderRadius="md">
                        <Box p={2}>
                            
                            <Input type="text" className="form-control" border="solid" placeholder="Name" name="name" colorScheme="blue" size="sm" bg="Azure"/>
                        
                            <Input type="email" className="form-control" border="solid" placeholder="Email Address" name="email" size="sm" mt={2} bg="Azure"/>
                        
                            <Input type="text" className="form-control" border="solid" placeholder="Subject" name="subject" size="sm" mt={2} bg="Azure"/>
                        
                            <Input className="form-control" id="" cols="30" rows="8" border="solid" placeholder="¿Qué días viajarás?" name="date" size="sm" mt={2} bg="Azure"/>
                        
                            <Textarea className="form-control" id="" cols="30" rows="8" border="solid" placeholder="Your message" name="message" size="sm" mt={2} bg="Azure"></Textarea>
                        
                            <Input type="submit" className="btn btn-info" border="solid" background="white" value="Send Message" size="sm"  mt={2} bg="Azure"/>
                            
                        </Box>
>>>>>>> 00670237a5828fca5ca2c7a9efc9695a1edb08a5
                    </Grid>
            </form>
        </Flex>
    )
}