import emailjs from "emailjs-com";
import React from 'react';
import { Flex, Center, Grid, Input, Textarea, Text } from "@chakra-ui/react";

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
            <Flex className="container">
            <form onSubmit={sendEmail}>
                    <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "41rem" marginBottom="15rem" background="linear-gradient(120deg, blue, grey)" borderRadius="md">
                        <Text>Formulario de Contacto</Text>
                        <Center w="500px" textAlign='center'>
                            <Input type="text" className="form-control" placeholder="Name" name="name" colorScheme="blue" size="sm" m={2}/>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></Textarea>
                        </Center>
                        <Center w="500px" textAlign='center'>
                            <Input type="submit" className="btn btn-info" value="Send Message"></Input>
                        </Center>
                    </Grid>
                </form>
            </Flex>
        </Flex>
    )
}