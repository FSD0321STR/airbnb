import React from 'react';
import { Flex, Center, Grid, Input, Textarea, Text, Modal, Button,
    ModalOverlay,
    useDisclosure,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from "@chakra-ui/react";
import ContactUs from './Reserva-Form';

      function PopUp() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [size, setSize] = React.useState("md")
      
        const handleSizeClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
      
        const sizes = ["xl"]
      
        return (
          <>
            {sizes.map((size) => (
              <Button bg="#FF385C"
                onClick={() => handleSizeClick(size)}
                key={size}
                ml={2}
                mt={4}
              >{`Reservar`}</Button>
            ))}
      
            <Modal onClose={onClose} size={size} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Formulario de Contacto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <ContactUs />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

      export default PopUp;