import React, { useState } from "react";
import { Grid, Center, Text, Box, extendTheme } from "@chakra-ui/react";

import NameInput from "./NameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./Password";
import RepeatPasswordInput from "./RepeatPassword";
import TitleInputRegister from "./TitleInputRegister";
import RegisterUserButton from "./RegisterUserButton"


import { emailValidation, passwordValidation, phoneValidation, textValidation } from "../../utils/formValidation";

const theme = extendTheme({
    textStyles: {
      h1: {
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
      h2: {
        fontSize: ["36px", "48px"],
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
    },
  })

function RegisterForm({onSubmit, error}) {

    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [repitePassword,setRepitePassword] = useState("");
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


    function registerUser(event) {
        event.preventDefault();


        const nameValidate = textValidation(name);
        const lastNameValidate = textValidation(lastName);
        const emailValidate = emailValidation(email);
        const phoneValidate = phoneValidation(phone);
        const passwordValidate = passwordValidation(password);
       
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
        else if(!passwordValidate) {
            setPasswordErrorMessage(true)
        }
        else if(password!==repitePassword) {
            setRepitePasswordErrorMessage(true)
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
            const dataUser = new FormData();
            dataUser.append("image", image);
            dataUser.append("name",name);
            dataUser.append("lastName",lastName);
            dataUser.append("phone",phone);
            dataUser.append("email",email);
            dataUser.append("password", password);

            onSubmit( dataUser
        );
        
        }
    }


    return (
    <form onSubmit={registerUser} method="POST" encType="multipart/form-data">
        
        <p>{error}</p>
        <Grid marginTop="8rem" marginLeft= "10rem">
            <TitleInputRegister></TitleInputRegister>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}   marginLeft= "3rem" >
        
        <Grid marginLeft= "15rem" marginRight="4rem"  marginTop="5rem">
            <Box m={2} marginTop="1rem">
                <input type="file" name="image" id="image" />
            </Box> 
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
            
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="5rem" marginBottom="5rem"   marginLeft= "10rem">
            <Box m={3} gap={5} marginTop="5rem">
                <RegisterUserButton></RegisterUserButton>
            </Box>
        </Grid>
    </form>
    )
}

export default RegisterForm;