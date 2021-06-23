import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import EmailLogIn from "./Email";
import PasswordLogIn from "./Password";
import SubmitLogIn from "./Submit";

import { emailValidation, passwordValidation } from "../../utils/formValidation";

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
        <Grid m={2} templateColumns="repeat(2, 1fr)" gap={1}>
          <EmailLogIn value={email} validation={emailErrorMessage} onChange={getEmail}></EmailLogIn>
          <PasswordLogIn value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordLogIn>
        </Grid>
        <SubmitLogIn></SubmitLogIn>
    </form>
    )
}

export default LogInForm;