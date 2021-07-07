import React, { useState, useEffect } from "react";
import { Grid, Center } from "@chakra-ui/react";
import {getServicioApi} from "../../utils/apiTest";

import EditTitleServicioInput from "./EditTitleServicioInput";
import EditServicioButton from "./EditServicioButton";

import { textValidation } from "../../utils/formValidation";

function EditServicioAlojamientoForm({onSubmit, error, servicioAlojamientoId}) {

    const [loading, setLoading] = useState(true);
    const [servicioAlojamiento,setServicioAlojamiento] = useState("");

    useEffect( async () => {
        const servicioAlojamiento = await getServicioApi(servicioAlojamientoId);
        setServicioAlojamiento(servicioAlojamiento.servicios.title);
        setLoading(false);
      }, []);

    

    
    const [titleErrorMessage,setTitleErrorMessage] = useState(false);
    

    function getServicioAlojamiento(e) {
        const actualValue = e.target.value;
        setServicioAlojamiento(actualValue);
        if(titleErrorMessage===true) {setTitleErrorMessage(false)}
    }

    

    function editServicioAlojamiento(event) {
        event.preventDefault();
        const nameValidate = textValidation(servicioAlojamiento);

        //console.log(password);
       
        if(!nameValidate){
            setTitleErrorMessage(true)
        } 
        
        else {
            setTitleErrorMessage(false)
            onSubmit( 
                servicioAlojamiento, servicioAlojamientoId,
        );
        
        }
    }

    if(loading) {
        return (
          <div>
            cargando datos...
          </div>
        )
      }

    return (
    <form onSubmit={editServicioAlojamiento}>
        
        <p>{error}</p>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} marginTop="5rem" marginLeft= "3rem" marginRight="3rem">
          <EditTitleServicioInput value={servicioAlojamiento} validation={titleErrorMessage} onChange={getServicioAlojamiento}></EditTitleServicioInput>
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="5rem" marginLeft= "42.5rem">
            <Center w="500px" textAlign='center'>
                <EditServicioButton></EditServicioButton>
            </Center>
        </Grid>
        
    </form>
    )
}

export default EditServicioAlojamientoForm;