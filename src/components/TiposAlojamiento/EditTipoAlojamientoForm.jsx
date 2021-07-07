import React, { useState, useEffect } from "react";
import { Grid, Center } from "@chakra-ui/react";
import {getTipoApi} from "../../utils/apiTest";

import EditTitleInput from "./EditTitleInput";
import EditTipoButton from "./EditTipoButton";

import { textValidation } from "../../utils/formValidation";

function EditTipoAlojamientoForm({onSubmit, error, tipoAlojamientoId}) {

    //console.log(tipoAlojamientoId);

    const [loading, setLoading] = useState(true);
    const [tipoAlojamiento,setTipoAlojamiento] = useState("");

    // let userId = JSON.parse(localStorage.getItem('userId'));
    // userId = userId.id;
    //console.log(userId);

    useEffect( async () => {
        const tipoAlojamiento = await getTipoApi(tipoAlojamientoId);
        setTipoAlojamiento(tipoAlojamiento.tipos.title);
        setLoading(false);
      }, []);

    

    
    const [titleErrorMessage,setTitleErrorMessage] = useState(false);
    

    function getTipoAlojamiento(e) {
        const actualValue = e.target.value;
        setTipoAlojamiento(actualValue);
        if(titleErrorMessage===true) {setTitleErrorMessage(false)}
    }

    

    function editTipoAlojamiento(event) {
        event.preventDefault();
        const nameValidate = textValidation(tipoAlojamiento);

        //console.log(password);
       
        if(!nameValidate){
            setTitleErrorMessage(true)
        } 
        
        else {
            setTitleErrorMessage(false)
            onSubmit( 
                tipoAlojamiento, tipoAlojamientoId,
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
    <form onSubmit={editTipoAlojamiento}>
        
        <p>{error}</p>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} marginTop="5rem" marginLeft= "3rem" marginRight="3rem">
          <EditTitleInput value={tipoAlojamiento} validation={titleErrorMessage} onChange={getTipoAlojamiento}></EditTitleInput>
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="5rem" marginLeft= "42.5rem">
            <Center w="500px" textAlign='center'>
                <EditTipoButton></EditTipoButton>
            </Center>
        </Grid>
        
    </form>
    )
}

export default EditTipoAlojamientoForm;