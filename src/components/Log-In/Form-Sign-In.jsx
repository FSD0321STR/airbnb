import React from "react";

function FormSignIn ({children}) {
    function PasswordRecovering() {
        console.log('aaa');
      }

    return <form onSubmit={PasswordRecovering}>{children}</form>;
}

export default FormSignIn;