import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import SubmitCreateServicioButton from "./SubmitCreateServicioButton";
import ServicioAlojamientoInput from "./ServicioAlojamientoInput";

function CreateServicioForm({onSubmit}) {

    const [servicioAlojamiento,setServicioAlojamiento] = useState("");

    function getServicioAlojamiento(e) {
        const actualServicioAlojamiento = e.target.value;
        setServicioAlojamiento(actualServicioAlojamiento);
    }


    function CreateServicioAlojamiento(event) {
        event.preventDefault();
            onSubmit({
                title: servicioAlojamiento,
            })
    }
    

    return (
    <form onSubmit={CreateServicioAlojamiento}>
        <Grid m={1} templateColumns="repeat(2, 1fr)" gap={2}>
          <ServicioAlojamientoInput value={servicioAlojamiento} onChange={getServicioAlojamiento}></ServicioAlojamientoInput>
        </Grid>
        <SubmitCreateServicioButton></SubmitCreateServicioButton>
    </form>
    )
}

export default CreateServicioForm;