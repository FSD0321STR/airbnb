import emailjs from "emailjs-com";
import React from 'react';
import { Flex, Center, Grid, Input, Textarea, Box, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from "@chakra-ui/react";

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
                    <Grid templateColumns="repeat(1, 1fr)" gap={2} marginTop="1rem" border="ridge" bg="#FFffff" borderRadius="md">
                        <Box p={2}>
                            
                            <Input type="text" className="form-control" border="solid" placeholder="Name" name="name" colorScheme="blue" size="sm" bg="Azure"/>
                        
                            <Input type="email" className="form-control" border="solid" placeholder="Email Address" name="email" size="sm" mt={2} bg="Azure"/>
                        
                            <Input type="text" className="form-control" border="solid" placeholder="Subject" name="subject" size="sm" mt={2} bg="Azure"/>
                        
                            <Input className="form-control" id="" cols="30" rows="8" border="solid" placeholder="¿Qué días viajarás?" name="date" size="sm" mt={2} bg="Azure"/>
                        
                            <Textarea className="form-control" id="" cols="30" rows="8" border="solid" placeholder="Your message" name="message" size="sm" mt={2} bg="Azure"></Textarea>
                        
                            <Input type="submit" className="btn btn-info" border="solid" background="white" value="Send Message" size="sm"  mt={2} bg="Azure"/>
                            
                        </Box>
                    </Grid>
            </form>
        </Flex>
    )
}

function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }