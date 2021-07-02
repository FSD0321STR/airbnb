import React, { useState} from "react";
import { Grid, Center } from "@chakra-ui/react";
import "filepond/dist/filepond.min.css";
import { FormControl, FormLabel } from "@chakra-ui/react"
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
import RegisterAlojamientoButton from "./RegisterAlojamientoButton"

registerPlugin(FilePondPluginImagePreview);

function EditFormAlojamiento({onSubmit}) {

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
    const [files, setFiles] = useState([]);
    
    function getName(e) {
        const actualName = e.target.value;
        setName(actualName);
     }

     function getEmail(e) {
        const actualEmail = e.target.value;
        setEmail(actualEmail);
    }

    function getPhone(e) {
        const actualPhone = e.target.value;
        setPhone(actualPhone);
    }

    function getAdress(e) {
        const actualAdress = e.target.value;
        setAdress(actualAdress);
    }
    function getLocation(e) {
        const actualLocation = e.target.value;
        setLocation(actualLocation);
    }
    
    function getState(e) {
        const actualState = e.target.value;
        setState(actualState);
    }

    function getCountry(e) {
        const actualCountry = e.target.value;
        setCountry(actualCountry);
    }

    function getType(e) {
        const actualType = e.target.value;
        setType(actualType);
    }
    function getNumberGuests(e) {
        const actualNumberGuests = e.target.value;
        setNumberGuests(actualNumberGuests);
     }

     function getServises(e) {
        const actualServises = e.target.value;
        setServises(actualServises);
    }

    function getDescription(e) {
        const actualDescription = e.target.value;
        setDescription(actualDescription);
    }

    function getFiles(e) {
        const actualFiles = e.target.value;
        setFiles(actualFiles);
    }

    function registerAlojamientoUser(event) {
        event.preventDefault();
            onSubmit({
                name: name,
                email: email,
                phone: phone,
                address: address,
                location: location,
                state: state,
                country: country,
                type: type,
                numberGuests: numberGuests,
                services: services,
                description: description,
                files: setFiles,
            }
        );
        
    }
    

    return (
    <form onSubmit={registerAlojamientoUser}>
        <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "38rem" >
            <Center w="50%" textAlign='center'>
                <TitleRegisterAlojamiento />
            </Center>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} marginTop="5rem" marginLeft= "30rem" marginRight="35rem">
            <NameAlojamientoInput pos="right" value={name}  onChange={getName}></NameAlojamientoInput>
            <EmailAlojamientoInput value={email}  onChange={getEmail}></EmailAlojamientoInput>
            <PhoneAlojamientoInput value={phone}  onChange={getPhone}></PhoneAlojamientoInput>
            <AddressAlojamientoInput pos="left" value={address} onChange={getAdress}></AddressAlojamientoInput>
            <LocationAlojamientoInput value={location} onChange={getLocation}></LocationAlojamientoInput>
            <StateAlojamientoInput value={state} onChange={getState}></StateAlojamientoInput>
            <CountryAlojamientoInput pos="right" value={country}  onChange={getCountry}></CountryAlojamientoInput>
            <TypeAlojamientoChecklist value={type}  onChange={getType}></TypeAlojamientoChecklist>
            <NumberGuestsAlojamientoInput value={numberGuests}  onChange={getNumberGuests}></NumberGuestsAlojamientoInput>
            <ServisesAlojamientoChecklist pos="left" value={services} onChange={getServises}></ServisesAlojamientoChecklist>
            <DescriptionAlojamientoInput value={description} onChange={getDescription}></DescriptionAlojamientoInput>
            <Box id="FilesImages" value={files} onChange={getFiles}>
                <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={6}
                name="files"
                labelIdle='Arrastra aquí las imágenes del alojamiento   <span class="filepond--label-action">(Máximo 6 imágenes)</span>'
                />
            </Box>

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