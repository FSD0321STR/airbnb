import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Select, FormHelperText } from "@chakra-ui/react";
import { getAllTipoAlojamientoApi } from "../../utils/apiTest";

function TypeAlojamientoChecklist({value,onChange,validation}) {

    const [tipoAlojamiento,setTipoAlojamiento] = useState([]);

    useEffect( async () => {
        const  tipos  = await getAllTipoAlojamientoApi();
        setTipoAlojamiento(tipos.tipos);
        
        //console.log(tipos);
        //const {image: {img }} = user.user;
        //const bufferImage = Buffer.from(img.data).toString("base64");
        //setLoading(false);
      }, []);

      //console.log(tipoAlojamiento);

      
      

    return (
        <FormControl id="type" p={2}>
            <FormLabel fontSize="sm" m={1}>Tipo de Alojamiento</FormLabel>
            <Select placeholder="Tipo alojamiento" name="type" value={value} onChange={onChange} type="text" size="sm" colorScheme="blue" bg="Azure">
                {
                    tipoAlojamiento.map((tipo) => (
                        <option value={tipo.title}>{tipo.title}</option>
                    ))
                }
            </Select>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Elija el tipo de alojamiento</FormHelperText> }
        </FormControl>
    )
}

export default TypeAlojamientoChecklist;

