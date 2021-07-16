import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Select, FormHelperText } from "@chakra-ui/react"
import { getAllServiciosAlojamientoApi } from "../../utils/apiTest";

function ServisesAlojamientoChecklist({value,onChange,validation}) {

    const [servicioAlojamiento,setServicioAlojamiento] = useState([]);

    useEffect( async () => {
        const  servicios  = await getAllServiciosAlojamientoApi();
        setServicioAlojamiento(servicios.servicios);
        
        //console.log(tipos);
        //const {image: {img }} = user.user;
        //const bufferImage = Buffer.from(img.data).toString("base64");
        //setLoading(false);
      }, []);

    return (
        <FormControl id="services" p={2}>
            <FormLabel fontSize="sm" m={1}>Servicios que incluye</FormLabel>
            <Select placeholder="Servicios que incluye" name="type" value={value} onChange={onChange} type="text" size="sm" colorScheme="blue" bg="Azure">
            {
                    servicioAlojamiento.map((servicio) => (
                        <option value={servicio.title}>{servicio.title}</option>
                    ))
                }
            </Select>
            { !validation ? "" : <FormHelperText fontSize="xs" color="red" mx={1}>Elija los servicios que incluye</FormHelperText> }
        </FormControl>
    )
}

export default ServisesAlojamientoChecklist;