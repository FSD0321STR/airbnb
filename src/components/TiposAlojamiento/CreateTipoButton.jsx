import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react"

function CreateTipoButton () {
    const history = useHistory();

    function goToCreateTipoPage() {
        history.push("/create-tipo-alojamiento");
    }

    return (
        <Button onClick={goToCreateTipoPage} colorScheme="blue" size="sm" m={2}>
          Crear tipo de alojamiento
        </Button>
    );
}

export default CreateTipoButton;