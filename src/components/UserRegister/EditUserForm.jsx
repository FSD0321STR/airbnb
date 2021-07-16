import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";
import { ChakraProvider, Box, Grid, Center, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import TitleInputEditUser from "./TitleInputEditUser"
import {getUserApi} from "../../utils/apiTest";

import NameInput from "./NameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./Password";
import RepeatPasswordInput from "./RepeatPassword";
import EditUserButton from "./EditUserButton";

import { emailValidation, passwordValidation, phoneValidation, textValidation } from "../../utils/formValidation";

function EditUserForm({onSubmit, error}) {

    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState({});
    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [repitePassword,setRepitePassword] = useState("");

    let userId = JSON.parse(localStorage.getItem('userId'));
    userId = userId.id;
    //console.log(userId);

    useEffect( async () => {
        const user = await getUserApi(userId);
        const {image: {img }} = user.user;
        const bufferImage = Buffer.from(img.data).toString("base64");
        setUser(user);
        setName(user.user.name);
        setImage(`data:${img.contentType};base64,` + bufferImage);
        setLastName(user.user.lastName);
        setEmail(user.user.email);
        setPhone(user.user.phone);
        setLoading(false);
      }, []);

    

    
    const [nameErrorMessage,setNameErrorMessage] = useState(false);
    const [lastNameErrorMessage,setLastNameErrorMessage] = useState(false);
    const [emailErrorMessage,setEmailErrorMessage] = useState(false);
    const [phoneErrorMessage,setPhoneErrorMessage] = useState(false);
    const [passwordErrorMessage,setPasswordErrorMessage] = useState(false);
    const [repitePasswordErrorMessage,setRepitePasswordErrorMessage] = useState(false);

    function getName(e) {
        const actualName = e.target.value;
        setName(actualName);
        if(nameErrorMessage===true) {setNameErrorMessage(false)}
    }

    function getLastName(e) {
        const actualLastName = e.target.value;
        setLastName(actualLastName);
        if(lastNameErrorMessage===true) {setLastNameErrorMessage(false)}
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

    function getPassword(e) {
        const actualPassword = e.target.value;
        setPassword(actualPassword);
        if(passwordErrorMessage===true) {setPasswordErrorMessage(false)}
    }

    function getRepitePassword(e) {
        const actualRepitePassword = e.target.value;
        setRepitePassword(actualRepitePassword);
        if(repitePasswordErrorMessage===true) {setRepitePasswordErrorMessage(false)}
    }

    console.log(name);

    function editProfile(event) {
        event.preventDefault();

        const nameValidate = textValidation(name);
        const lastNameValidate = textValidation(lastName);
        const emailValidate = emailValidation(email);
        const phoneValidate = phoneValidation(phone);
        const passwordValidate = passwordValidation(password);

        console.log(nameValidate);
        //console.log(password);
       
        if(!nameValidate){
            setNameErrorMessage(true)
        } 
        else if(!lastNameValidate) {
            setLastNameErrorMessage(true)
        }
        else if(!emailValidate) {
            setEmailErrorMessage(true)
        }
        else if(!phoneValidate) {
            setPhoneErrorMessage(true)
        }
        else if(password != "") {
            if(!passwordValidate) {
                setPasswordErrorMessage(true)
            }
            else if(password!==repitePassword) {
                setRepitePasswordErrorMessage(true)
            }
        }   
        else {
            setNameErrorMessage(false)
            setLastNameErrorMessage(false)
            setEmailErrorMessage(false)
            setPhoneErrorMessage(false)
            setPasswordErrorMessage(false)
            setRepitePasswordErrorMessage(false)

            const input = document.getElementById('image');
            const image = input.files[0];
     
            const dataEditUser = new FormData();
            dataEditUser.append("image", image);
            dataEditUser.append("name",name);
            dataEditUser.append("lastName",lastName);
            dataEditUser.append("phone",phone);
            dataEditUser.append("email",email);
            dataEditUser.append("password", password);

            onSubmit( 
                dataEditUser, userId,
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
    <form onSubmit={editProfile}>
        
        <p>{error}</p>
        <Grid marginTop="5rem" marginLeft= "8rem">
            <TitleInputEditUser></TitleInputEditUser>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}  marginLeft= "3rem" >

            <Grid marginLeft= "10rem" marginRight="4rem"  marginTop="5rem">   
                <img src={image} width="150" />
                <input type="file" name="image" id="image" />
            </Grid>
            <Grid  marginRight="12rem" marginTop="5rem">
                <NameInput value={name} validation={nameErrorMessage} onChange={getName}></NameInput>
                <LastNameInput value={lastName} validation={lastNameErrorMessage} onChange={getLastName}></LastNameInput>
                <EmailInput value={email} validation={emailErrorMessage} onChange={getEmail}></EmailInput>
            </Grid>
            <Grid marginLeft= "-8rem"   marginRight="20rem"  marginTop="5rem">
                <PhoneInput value={phone} validation={phoneErrorMessage} onChange={getPhone}></PhoneInput>
                <PasswordInput value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordInput>
                <RepeatPasswordInput value={repitePassword} validation={repitePasswordErrorMessage} onChange={getRepitePassword}></RepeatPasswordInput>
            </Grid> 
            
            <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="8rem" marginBottom="5rem"   marginLeft= "5rem">
                <Box m={3} gap={5} marginTop="5rem">
                    <EditUserButton></EditUserButton>
                </Box>
            </Grid>
        </Grid>
    </form>
    )
}

export default EditUserForm;