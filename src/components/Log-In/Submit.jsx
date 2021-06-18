import React from "react";
import { Button } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'

function SubmitLogIn () {
    return (
        <Button type="submit" colorScheme="blue" size="sm" m={2}>
          Log In
        </Button>
    );
}

export default SubmitLogIn;
