import { Textarea, Text, Box } from "@chakra-ui/react"

function MessageBox () {
    return (
        <Box>
          <Text>Mensaje</Text>
          <Textarea placeholder="Escribe aquí tu mensaje" />
        </Box>
    )
}

export default MessageBox;