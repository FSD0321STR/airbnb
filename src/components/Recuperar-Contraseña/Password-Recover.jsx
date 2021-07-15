import React, { useState } from "react";
import { Flex, Center, Grid} from "@chakra-ui/react"
import EmailPasswordRecover from "./Email-recover";
import SubmitPasswordRecover from "./Submit-recover";
import TitleInputPasswordRecover from "./Title-Input-recover";
import PasswordInputRecover from "./PasswordInput";
import RepitePasswordInputRecover from "./RepitePassowordInput";
import FormSignIn from "../Log-In/Form-Sign-In";
import { emailValidation, passwordValidation } from "../../utils/formValidation";

  function PasswordRecover ({onSubmit}) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repitePassword,setRepitePassword] = useState("");
    const [emailErrorMessage,setEmailErrorMessage] = useState(false);
    const [passwordErrorMessage,setPasswordErrorMessage] = useState(false);
    const [repitePasswordErrorMessage,setRepitePasswordErrorMessage] = useState(false);

    function getEmail(e) {
        const actualEmail = e.target.value;
        setEmail(actualEmail);
        //console.log(actualEmail);
        if(emailErrorMessage===true) {setEmailErrorMessage(false)}
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

      function PasswordRecovering(event) {
        event.preventDefault();

        const emailValidate = emailValidation(email);
        const passwordValidate = passwordValidation(password);
       
        if(!emailValidate) {
            setEmailErrorMessage(true)
        }
        else if(!passwordValidate) {
            setPasswordErrorMessage(true)
        }
        else if(password!==repitePassword) {
          setRepitePasswordErrorMessage(true)
        }
        else {
            setEmailErrorMessage(false)
            setPasswordErrorMessage(false)
            setRepitePasswordErrorMessage(false)
            onSubmit({
                email: email,
                password: password,
            }
        );
        
        }
      }

      return (
      <Flex>
        <form onSubmit={PasswordRecovering}>
          <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "2rem" marginBottom="15rem">
            
              <TitleInputPasswordRecover />
            
            <Center w="500px">
              <EmailPasswordRecover value={email} validation={emailErrorMessage} onChange={getEmail} />
            </Center>
            <Center w="500px">
            <PasswordInputRecover value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordInputRecover>
            </Center>
            <Center w="500px">
            <RepitePasswordInputRecover value={repitePassword} validation={repitePasswordErrorMessage} onChange={getRepitePassword}></RepitePasswordInputRecover>
            </Center>
            <Center w="500px" textAlign='center'>
              <SubmitPasswordRecover></SubmitPasswordRecover>
            </Center>
          </Grid>
         </form>
      </Flex>
      );
  }

  export default PasswordRecover;

  