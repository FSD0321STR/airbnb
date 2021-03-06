import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";
import { Grid, Center } from "@chakra-ui/react";
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

function EditUsersForm({onSubmit, error, userId}) {

    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState({});
    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [repitePassword,setRepitePassword] = useState("");

    // let userId = JSON.parse(localStorage.getItem('userId'));
    // userId = userId.id;
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


    function editProfile(event) {
        event.preventDefault();

        const nameValidate = textValidation(name);
        const lastNameValidate = textValidation(lastName);
        const emailValidate = emailValidation(email);
        const phoneValidate = phoneValidation(phone);
        const passwordValidate = passwordValidation(password);

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
            //console.log(image.file);
            const dataEditUser = new FormData();
            dataEditUser.append("image", image);
            dataEditUser.append("name",name);
            dataEditUser.append("lastName",lastName);
            dataEditUser.append("phone",phone);
            dataEditUser.append("email",email);
            dataEditUser.append("password", password);

            //console.log(dataUser);

            onSubmit( 
                dataEditUser, userId,
        );
        
        }
    }

    if(loading) {
        return (
          <div>
            cargando datos...
          </div>
        )
      }

    return (
    <form onSubmit={editProfile}>
        <Grid templateColumns="repeat(1, 1fr)" gap={10} marginTop="5rem" marginLeft= "3rem" >
            <Center w="50%" textAlign='center'>
                <TitleInputEditUser/>
            </Center>
        </Grid>
        <p>{error}</p>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} marginTop="5rem" marginLeft= "3rem" marginRight="3rem">
          <NameInput value={name} validation={nameErrorMessage} onChange={getName}></NameInput>
          <LastNameInput value={lastName} validation={lastNameErrorMessage} onChange={getLastName}></LastNameInput>
          <EmailInput value={email} validation={emailErrorMessage} onChange={getEmail}></EmailInput>
          <PhoneInput value={phone} validation={phoneErrorMessage} onChange={getPhone}></PhoneInput>
          <PasswordInput value={password} validation={passwordErrorMessage} onChange={getPassword}></PasswordInput>
          <RepeatPasswordInput value={repitePassword} validation={repitePasswordErrorMessage} onChange={getRepitePassword}></RepeatPasswordInput>
          <img src={image} width="200" />
          <input type="file" name="image" id="image" />
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} marginTop="5rem" marginLeft= "42.5rem">
            <Center w="500px" textAlign='center'>
                <EditUserButton></EditUserButton>
            </Center>
        </Grid>
        
    </form>
    )
}

export default EditUsersForm;