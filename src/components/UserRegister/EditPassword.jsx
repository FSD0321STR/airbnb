import React, { useState, useEffect } from "react";
import { ChakraProvider, Box, Grid, Center, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import {getUserApiPassword} from "../../utils/apiTest";
import PasswordInput from "./Password";
import RepeatPasswordInput from "./RepeatPassword";
import EditPasswordButton from "./EditPasswordButton";

import { passwordValidation } from "../../utils/formValidation";
import EmailPasswordRecover from "../Recuperar-Contraseña/Email-recover";

function EditPassword({onSubmit, email}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repitePassword,setRepitePassword] = useState("");

    useEffect( async () => {
        const user = await getUserApiPassword(email);
        setUser(user);
      }, []);
    
    const [passwordErrorMessage,setPasswordErrorMessage] = useState(false);
    const [repitePasswordErrorMessage,setRepitePasswordErrorMessage] = useState(false);

    function getEmail(e) {
        const actualEmail = e.target.value;
        setEmail(actualEmail);
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


    function editPassword(event) {
        event.preventDefault();
            const passwordValidate = passwordValidation(password);

        //console.log(password);
       
            if(password != "") {
            if(!passwordValidate) {
                setPasswordErrorMessage(true)
            }
            else if(password!==repitePassword) {
                setRepitePasswordErrorMessage(true)
            }
        }   
        else {
            setPasswordErrorMessage(false)
            setRepitePasswordErrorMessage(false)

            //console.log(image.file);
            const dataEditPassword = new FormData();
            dataEditPassword.append("password", password);

            //console.log(dataUser);

            onSubmit( 
                dataEditPassword
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
    <form onSubmit={editPassword}>
        
        <p>{error}</p>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} marginTop="5rem" marginLeft= "3rem" marginRight="3rem">
          <EmailPasswordRecover value={email} onChange={getEmail}></EmailPasswordRecover>
          <PasswordInput value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordInput>
          <RepeatPasswordInput value={repitePassword} validation={repitePasswordErrorMessage} onChange={getRepitePassword}></RepeatPasswordInput>
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="3rem" marginLeft= "3rem">
            <Center w="500px" textAlign='center'>
                <EditPasswordButton></EditPasswordButton>
            </Center>
        </Grid>
        
    </form>
    )
}

export default EditPassword;