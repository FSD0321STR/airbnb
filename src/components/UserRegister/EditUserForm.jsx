import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";

import NameInput from "./NameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./Password";
import RepeatPasswordInput from "./RepeatPassword";
import RegisterUserButton from "./RegisterUserButton";

import { emailValidation, passwordValidation, phoneValidation, textValidation } from "../../utils/formValidation";

function EditUserForm({onSubmit}) {

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


    function editUser(event) {
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
    <form onSubmit={editUser}>
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
          <NameInput value={name} validation={nameErrorMessage} onChange={getName}></NameInput>
          <LastNameInput value={lastName} validation={lastNameErrorMessage} onChange={getLastName}></LastNameInput>
          <EmailInput value={email} validation={emailErrorMessage} onChange={getEmail}></EmailInput>
          <PhoneInput value={phone} validation={phoneErrorMessage} onChange={getPhone}></PhoneInput>
          <PasswordInput value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordInput>
          <RepeatPasswordInput value={repitePassword} validation={repitePasswordErrorMessage} onChange={getRepitePassword}></RepeatPasswordInput>
        </Grid>
        <RegisterUserButton></RegisterUserButton>
    </form>
    )
}

export default EditUserForm;