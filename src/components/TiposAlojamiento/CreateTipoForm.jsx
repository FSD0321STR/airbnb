import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import SubmitCreateTipoButton from "./SubmitCreateTipoButton";
import TipoAlojamientoInput from "./TipoAlojamientoInput";

function CreateTipoForm({onSubmit}) {

    const [tipoAlojamiento,setTipoAlojamiento] = useState("");

    function getTipoAlojamiento(e) {
        const actualTipoAlojamiento = e.target.value;
        setTipoAlojamiento(actualTipoAlojamiento);
    }


    function CreateTipoAlojamiento(event) {
        event.preventDefault();
            onSubmit({
                title: tipoAlojamiento,
            })
    }
    

    return (
    <form onSubmit={CreateTipoAlojamiento}>
        <Grid m={1} templateColumns="repeat(2, 1fr)" gap={2}>
          <TipoAlojamientoInput value={tipoAlojamiento} onChange={getTipoAlojamiento}></TipoAlojamientoInput>
        </Grid>
        <SubmitCreateTipoButton></SubmitCreateTipoButton>
    </form>
    )
}

export default CreateTipoForm;