import React, { useState, useContext } from "react";
import { Grid, Center } from "@chakra-ui/react";

import NameInput from "./NameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./Password";
import RepeatPasswordInput from "./RepeatPassword";
import TitleInputRegister from "./TitleInputRegister";
import RegisterUserButton from "./RegisterUserButton"


import { emailValidation, passwordValidation, phoneValidation, textValidation } from "../../utils/formValidation";

function RegisterForm({onSubmit}) {

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
            onSubmit({
                name: name,
                lastName: lastName,
                email: email,
                phone: phone,
                password: password,
            }
        );
        
        }
    }


    return (
    <form onSubmit={registerUser}>
        <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "38rem" >
            <Center w="50%" textAlign='center'>
                <TitleInputRegister/>
            </Center>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} marginTop="5rem" marginLeft= "30rem" marginRight="35rem">
            <NameInput pos="right" value={name} validation={nameErrorMessage} onChange={getName}></NameInput>
            <LastNameInput pos="left" value={lastName} validation={lastNameErrorMessage} onChange={getLastName}></LastNameInput>
            <EmailInput value={email} validation={emailErrorMessage} onChange={getEmail}></EmailInput>
            <PhoneInput value={phone} validation={phoneErrorMessage} onChange={getPhone}></PhoneInput>
            <PasswordInput value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordInput>
            <RepeatPasswordInput value={repitePassword} validation={repitePasswordErrorMessage} onChange={getRepitePassword}></RepeatPasswordInput>
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="5rem" marginLeft= "42.5rem">
            <Center w="500px" textAlign='center' marginBottom="5rem">
                <RegisterUserButton></RegisterUserButton>
            </Center>
        </Grid>
    </form>
    )
}

export default RegisterForm;