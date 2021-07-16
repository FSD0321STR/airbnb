import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";
import { ChakraProvider, Grid, Center, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import * as FilePond from 'filepond';
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {getAlojamientoApi} from "../../utils/apiTest";

import TitleRegisterAlojamiento from "./TitleRegisterAlojamiento"
import NameAlojamientoInput from "./NameAlojamientoInput";
import EmailAlojamientoInput from "./EmailAlojamientoInput"; 
import PhoneAlojamientoInput from "./PhoneAlojamientoInput";
import AddressAlojamientoInput from "./AddressAlojamientoInput";
import LocationAlojamientoInput from "./LocationAlojamientoInput";
import StateAlojamientoInput from "./StateAlojamientoInput";
import CountryAlojamientoInput from "./CountryAlojamientoInput";
import TypeAlojamientoChecklist from "./TypeAlojamientoChecklist";
import NumberGuestsAlojamientoInput from "./NumberGuestsAlojamientoInput";
import ServisesAlojamientoChecklist from "./ServisesAlojamientoChecklist";
import DescriptionAlojamientoInput from "./DescriptionAlojamientoInput";
import RegisterAlojamientoButton from "./RegisterAlojamientoButton";
import PrecioAlojamientoInput from "./PrecioAlojamientoInput";

import { emailValidation, precioValidation, phoneValidation, textValidation } from "../../utils/formValidation";

FilePond.registerPlugin(FilePondPluginImagePreview);

function EditFormAlojamiento({onSubmit, alojamientoId}) {

    //console.log(alojamientoId);

    const [loading, setLoading] = useState(true);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAdress] = useState("");
    const [location,setLocation] = useState("");
    const [state,setState] = useState("");
    const [country,setCountry] = useState("");
    const [type,setType] = useState("");
    const [numberGuests,setNumberGuests] = useState("");
    const [services,setServises] = useState("");
    const [description,setDescription] = useState("");
    const [precio,setPrecio] = useState("");
    const [files, setFiles] = useState("");
    const [nameErrorMessage,setNameErrorMessage] = useState(false);
    const [emailErrorMessage,setEmailErrorMessage] = useState(false);
    const [phoneErrorMessage,setPhoneErrorMessage] = useState(false);
    const [addressErrorMessage,setAddressErrorMessage] = useState(false);
    const [locationErrorMessage,setLocationErrorMessage] = useState(false);
    const [stateErrorMessage,setStateErrorMessage] = useState(false);
    const [countryErrorMessage,setCountryErrorMessage] = useState(false);
    const [typeErrorMessage,setTypeErrorMessage] = useState(false);
    const [numberGuestsErrorMessage,setNumberGuestsErrorMessage] = useState(false);
    const [servicesErrorMessage,setServicesErrorMessage] = useState(false);
    const [descripcionErrorMessage,setDescripcionErrorMessage] = useState(false);
    const [precioErrorMessage,setPrecioErrorMessage] = useState(false);

    //let alojamientoId = JSON.parse(localStorage.getItem('userId'));
    //alojamientoId = alojamientoId.id;

    useEffect( async () => {
        const alojamiento = await getAlojamientoApi(alojamientoId);

        const {files: {0: {img }}} = alojamiento.alojamiento;
        const bufferImage = Buffer.from(img.data).toString("base64");
        setFiles(`data:${img.contentType};base64,` + bufferImage);
        //console.log(alojamiento.alojamiento.name);

        //const {image: {img }} = alojamiento.user;
        //const bufferImage = Buffer.from(img.data).toString("base64");
        //setUser(alojamiento);
        setName(alojamiento.alojamiento.name);
        setEmail(alojamiento.alojamiento.email);
        setPhone(alojamiento.alojamiento.phone);
        setAdress(alojamiento.alojamiento.address);
        setLocation(alojamiento.alojamiento.location);
        setState(alojamiento.alojamiento.state);
        setCountry(alojamiento.alojamiento.country);
        setType(alojamiento.alojamiento.type);
        setNumberGuests(alojamiento.alojamiento.numberGuests);
        setServises(alojamiento.alojamiento.services);
        setDescription(alojamiento.alojamiento.description);
        setPrecio(alojamiento.alojamiento.precio);
        //setFiles(`data:${img.contentType};base64,` + bufferImage);

        setLoading(false);
      }, []);
    
      function getName(e) {
        const actualName = e.target.value;
        setName(actualName);
        if(nameErrorMessage===true) {setNameErrorMessage(false)}
     }

     function getEmail(e) {
        const actualEmail = e.target.value;
        setEmail(actualEmail);
        if(emailErrorMessage===true) {setEmailErrorMessage(false)}
    }

    function getPhone(e) {
        const actualPhone = e.target.value;
        setPhone(actualPhone);
        if(phoneErrorMessage===true) {setPhoneErrorMessage(false)}
    }

    function getAdress(e) {
        const actualAdress = e.target.value;
        setAdress(actualAdress);
        if(addressErrorMessage===true) {setAddressErrorMessage(false)}
    }
    function getLocation(e) {
        const actualLocation = e.target.value;
        setLocation(actualLocation);
        if(locationErrorMessage===true) {setLocationErrorMessage(false)}
    }
    
    function getState(e) {
        const actualState = e.target.value;
        setState(actualState);
        if(stateErrorMessage===true) {setStateErrorMessage(false)}
    }

    function getCountry(e) {
        const actualCountry = e.target.value;
        setCountry(actualCountry);
        if(countryErrorMessage===true) {setCountryErrorMessage(false)}
    }

    function getType(e) {
        const actualType = e.target.value;
        setType(actualType);
        if(typeErrorMessage===true) {setTypeErrorMessage(false)}
    }
    function getNumberGuests(e) {
        const actualNumberGuests = e.target.value;
        setNumberGuests(actualNumberGuests);
        if(numberGuestsErrorMessage===true) {setNumberGuestsErrorMessage(false)}
     }

     function getServises(e) {
        const actualServises = e.target.value;
        setServises(actualServises);
        if(servicesErrorMessage===true) {setServicesErrorMessage(false)}
    }

    function getDescription(e) {
        const actualDescription = e.target.value;
        setDescription(actualDescription);
        if(descripcionErrorMessage===true) {setDescripcionErrorMessage(false)}
    }

    function getPrecio(e) {
        const actualPrecio = e.target.value;
        setPrecio(actualPrecio);
        if(precioErrorMessage===true) {setPrecioErrorMessage(false)}
    }

    function getFiles(e) {
        const actualFiles = e.target.value;
        setFiles(actualFiles);
    }

    //console.log(name);

    

    function editAlojamientoUser(event) {
        event.preventDefault();

        const nameValidate = textValidation(name);
        const emailValidate = emailValidation(email);
        const phoneValidate = phoneValidation(phone);
        const addressValidate = textValidation(address);
        const locationValidate = textValidation(location);
        const stateValidate = textValidation(state);
        const countryValidate = textValidation(country);
        const typeValidate = textValidation(type);
        const numberGuestsValidate = precioValidation(numberGuests);
        const servicesValidate = textValidation(services);
        const descriptionValidate = textValidation(description);
        const precioValidate = precioValidation(precio);

        //console.log(nameValidate);

        if(!nameValidate){
            setNameErrorMessage(true)
        } 
        else if(!emailValidate) {
            setEmailErrorMessage(true)
        }
        else if(!phoneValidate) {
            setPhoneErrorMessage(true)
        }
        else if(!phoneValidate) {
            setPhoneErrorMessage(true)
        }
        else if(!addressValidate) {
            setAddressErrorMessage(true)
        }
        else if(!locationValidate) {
            setLocationErrorMessage(true)
        }
        else if(!stateValidate) {
            setStateErrorMessage(true)
        }
        else if(!countryValidate) {
            setCountryErrorMessage(true)
        }
        else if(!typeValidate) {
            setTypeErrorMessage(true)
        }
        else if(!numberGuestsValidate) {
            setNumberGuestsErrorMessage(true)
        }
        else if(!servicesValidate) {
            setServicesErrorMessage(true)
        }
        else if(!descriptionValidate) {
            setDescripcionErrorMessage(true)
        }
        else if(!precioValidate) {
            setPrecioErrorMessage(true)
        }
        else {

            

            setNameErrorMessage(false)
            setEmailErrorMessage(false)
            setPhoneErrorMessage(false)
            setPhoneErrorMessage(false)
            setAddressErrorMessage(false)
            setLocationErrorMessage(false)
            setStateErrorMessage(false)
            setCountryErrorMessage(false)
            setTypeErrorMessage(false)
            setNumberGuestsErrorMessage(false)
            setServicesErrorMessage(false)
            setDescripcionErrorMessage(false)
            setPrecioErrorMessage(false)

            const input = document.getElementById('files');
            const afiles = input.files[0];
            
            const dataAlojamiento = new FormData();
            dataAlojamiento.append("files",afiles);
            dataAlojamiento.append("name",name);
            dataAlojamiento.append("email",email);
            dataAlojamiento.append("phone",phone);
            dataAlojamiento.append("address",address);
            dataAlojamiento.append("location",location);
            dataAlojamiento.append("state", state);
            dataAlojamiento.append("country",country);
            dataAlojamiento.append("type",type);
            dataAlojamiento.append("numberGuests",numberGuests);
            dataAlojamiento.append("services",services);
            dataAlojamiento.append("description",description);
            dataAlojamiento.append("precio",precio);

            onSubmit( 
                
                dataAlojamiento, alojamientoId,
                setLoading(true),
                
        );
      }
    }
    
    if(loading) {
        return (
            <ChakraProvider>
           
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </Box>
          </ChakraProvider>
        )
      }

    return (
    <form onSubmit={editAlojamientoUser}>
        <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "5rem" >
            <Center w="50%" textAlign='center'>
                <TitleRegisterAlojamiento />
            </Center>
        </Grid>
        <Grid templateColumns="repeat(2, 100fr)" gap={10} marginTop="5rem" marginLeft= "25rem" marginRight="25rem">
            <NameAlojamientoInput pos="right" value={name} validation={nameErrorMessage}  onChange={getName}></NameAlojamientoInput>
            <EmailAlojamientoInput value={email} validation={emailErrorMessage} onChange={getEmail}></EmailAlojamientoInput>
            <PhoneAlojamientoInput value={phone} validation={phoneErrorMessage} onChange={getPhone}></PhoneAlojamientoInput>
            <AddressAlojamientoInput pos="left" value={address} validation={addressErrorMessage} onChange={getAdress}></AddressAlojamientoInput>
            <LocationAlojamientoInput value={location} validation={locationErrorMessage} onChange={getLocation}></LocationAlojamientoInput>
            <StateAlojamientoInput value={state} validation={stateErrorMessage} onChange={getState}></StateAlojamientoInput>
            <CountryAlojamientoInput pos="right" value={country} validation={countryErrorMessage} onChange={getCountry}></CountryAlojamientoInput>
            <TypeAlojamientoChecklist value={type} validation={typeErrorMessage} onChange={getType}></TypeAlojamientoChecklist>
            <NumberGuestsAlojamientoInput value={numberGuests} validation={numberGuestsErrorMessage} onChange={getNumberGuests}></NumberGuestsAlojamientoInput>
            <ServisesAlojamientoChecklist pos="left" value={services} validation={servicesErrorMessage} onChange={getServises}></ServisesAlojamientoChecklist>
            <DescriptionAlojamientoInput value={description} validation={descripcionErrorMessage} onChange={getDescription}></DescriptionAlojamientoInput>
            <PrecioAlojamientoInput value={precio} validation={precioErrorMessage} onChange={getPrecio}></PrecioAlojamientoInput>
            <img src={files} width="200" />
            <input type="file" name="files" id="files" />

            {/* <Box  name="files" id="files" value={files} onChange={getFiles}>
                <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={6}
                name="files"
                labelIdle='Arrastra aquí las imágenes del alojamiento   <span class="filepond--label-action">(Máximo 6 imágenes)</span>'
                />
            </Box> */}
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="5rem" marginLeft= "42.5rem">
            <Center w="500px" textAlign='center' marginBottom="5rem">
                <RegisterAlojamientoButton></RegisterAlojamientoButton>
            </Center>
        </Grid>
    </form>
    )
}

export default EditFormAlojamiento;