import React, { useState } from "react";
import { Grid, Center } from "@chakra-ui/react";
import EmailLogIn from "./Email";
import PasswordLogIn from "./Password";
import SubmitLogIn from "./Submit";

import { emailValidation, passwordValidation } from "../../utils/formValidation";
import RecuperarPassword from "./RecuperarPassword";
import TitleInputLogIn from "./Title-Input";

function LogInForm({onSubmit,error}) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailErrorMessage,setEmailErrorMessage] = useState(false);
    const [passwordErrorMessage,setPasswordErrorMessage] = useState(false);

    function getEmail(e) {
        const actualEmail = e.target.value;
        setEmail(actualEmail);
        if(emailErrorMessage===true) {setEmailErrorMessage(false)}
    }

    function getPassword(e) {
        const actualPassword = e.target.value;
        setPassword(actualPassword);
        if(passwordErrorMessage===true) {setPasswordErrorMessage(false)}
    }

    function LogInUser(event) {
        event.preventDefault();

        const emailValidate = emailValidation(email);
        const passwordValidate = passwordValidation(password);
       
        if(!emailValidate) {
            setEmailErrorMessage(true)
        }
        else if(!passwordValidate) {
            setPasswordErrorMessage(true)
        }
        else {
            setEmailErrorMessage(false)
            setPasswordErrorMessage(false)
            onSubmit({
                email: email,
                password: password,
            }
        );
        
        }
    }


    return (
    <form onSubmit={LogInUser}>
        <Grid m={4} templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "41rem" marginBottom="15rem">
            <Center w="500px" textAlign='center'>
              <TitleInputLogIn />
            </Center>
            <Center w="500px" textAlign='center'>
              <EmailLogIn value={email} validation={emailErrorMessage} onChange={getEmail}></EmailLogIn>
            </Center>
            <Center w="500px" textAlign='center'>
              <PasswordLogIn value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordLogIn>
            </Center>
            <Center w="500px" textAlign='center'>
              <RecuperarPassword />
            </Center>
            <Center w="500px" textAlign='center'>
              <SubmitLogIn></SubmitLogIn>
            </Center>
        </Grid>
    </form>
    )
}

export default LogInForm;