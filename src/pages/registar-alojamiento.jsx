import React from "react";
import { ChakraProvider, Grid} from "@chakra-ui/react";
import RegisterFormAlojamiento from '../components/AlojamientoRegister/RegisterFormAlojamiento';
import NavBarLogout from "../components/NavBar/NavBarLogout";
import {registerAlojamientoApi} from "../utils/apiTest";

function RegisterAlojamientoPage() {

  const history = useHistory();
  const [registerError,setRegisterError] = useState("");

    async function registerAlojamientoUser(dataAlojamiento) {
        await registerAlojamientoApi(dataAlojamiento)
        .then(response => {
          if(response.message) {
            setRegisterError(response.message);
          } else {
            history.push("/alojamiento-register");
          }
        })
        .catch((error) => {
         Promise.reject(error);
        })
      }

    return (
      <div>
        <ChakraProvider>
          <NavBarLogout />
            <Grid marginTop="3%" position="center" bgRepeat="no-repeat" bgSize="200%" bgImage="url('./images/imagen-home.jpg')">
              <RegisterFormAlojamiento error={registerError} onSubmit={registerAlojamientoUser}></RegisterFormAlojamiento>
            </Grid>
        </ChakraProvider>
      </div>
    )
}

export default RegisterAlojamientoPage;