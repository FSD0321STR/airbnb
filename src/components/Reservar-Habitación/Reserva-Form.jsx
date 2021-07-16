import emailjs from "emailjs-com";
import React from 'react';
import { Flex, Center, Grid, Input, Textarea, Text, Modal,
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
                    </Grid>
            </form>
        </Flex>
    )
}