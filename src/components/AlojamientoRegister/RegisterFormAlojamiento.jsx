import React, { useState } from "react";
import { Grid, Center, Box } from "@chakra-ui/react";
import {FilePond, registerPlugin} from "react-filepond"
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

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

registerPlugin(FilePondPluginImagePreview);

function RegisterFormAlojamiento({onSubmit}) {

    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('userId')).id);
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
    const [files, setFiles] = useState([]);
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
    

    function registerAlojamientoUser(event) {
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

            const dataAlojamiento = new FormData();
            files.forEach(file => {
               
                dataAlojamiento.append("files",file.file);
            });
          
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
            dataAlojamiento.append("userId",userId);

            onSubmit(dataAlojamiento
        );
      }
    }
    

    return (
    <form onSubmit={registerAlojamientoUser} method="POST" encType="multipart/form-data">
        <Grid marginTop="3rem" marginLeft= "53rem" marginBottom="5">
            <TitleRegisterAlojamiento></TitleRegisterAlojamiento>
        </Grid>
        
        <Grid templateColumns="repeat(3, 1fr)" gap={4}  marginLeft= "3rem">
        <Grid  marginLeft= "10rem" marginRight="6rem">
                <Box name="files" id="files" value={files} onChange={getFiles}>
                    <FilePond  flex-direction="row" 
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={6}
                    name="files"
                    labelIdle='Arrastra aqu?? las im??genes del alojamiento   <span class="filepond--label-action">(M??ximo 6 im??genes)</span>'
                    />
                </Box>
            </Grid>
            <Grid marginRight="10rem" marginTop="5rem">
                <NameAlojamientoInput pos="right" value={name} validation={nameErrorMessage}  onChange={getName}></NameAlojamientoInput>
                <AddressAlojamientoInput pos="left" value={address} validation={addressErrorMessage} onChange={getAdress}></AddressAlojamientoInput>
                <LocationAlojamientoInput value={location} validation={locationErrorMessage} onChange={getLocation}></LocationAlojamientoInput>
                <StateAlojamientoInput value={state} validation={stateErrorMessage} onChange={getState}></StateAlojamientoInput>
                <CountryAlojamientoInput pos="right" value={country} validation={countryErrorMessage} onChange={getCountry}></CountryAlojamientoInput>
                <EmailAlojamientoInput value={email} validation={emailErrorMessage} onChange={getEmail}></EmailAlojamientoInput>
            </Grid>
            <Grid marginLeft= "-6rem"   marginRight="15rem"  marginTop="5rem">
                <PhoneAlojamientoInput value={phone} validation={phoneErrorMessage} onChange={getPhone}></PhoneAlojamientoInput>
                <TypeAlojamientoChecklist value={type} validation={typeErrorMessage} onChange={getType}></TypeAlojamientoChecklist>
                <ServisesAlojamientoChecklist pos="left" value={services} validation={servicesErrorMessage} onChange={getServises}></ServisesAlojamientoChecklist>
                <DescriptionAlojamientoInput value={description} validation={descripcionErrorMessage} onChange={getDescription}></DescriptionAlojamientoInput>
                <NumberGuestsAlojamientoInput value={numberGuests} validation={numberGuestsErrorMessage} onChange={getNumberGuests}></NumberGuestsAlojamientoInput>
                <PrecioAlojamientoInput value={precio} validation={precioErrorMessage} onChange={getPrecio}></PrecioAlojamientoInput>
            </Grid>

        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="2rem" marginLeft= "55rem" marginBottom="2rem">
        <Box m={3} gap={5} marginTop="2rem">
                <RegisterAlojamientoButton></RegisterAlojamientoButton>
            </Box>
        </Grid>
       
    </form>
    )
}

export default RegisterFormAlojamiento;