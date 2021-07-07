import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react"

function CreateServicioButton () {
    const history = useHistory();

    function goToCreateServicioPage() {
        history.push("/create-servicio-alojamiento");
    }

    return (
        <Button onClick={goToCreateServicioPage} colorScheme="blue" size="sm" m={2}>
          Crear servicio
        </Button>
    );
}

export default CreateServicioButton;