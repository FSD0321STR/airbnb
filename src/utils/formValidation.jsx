function textValidation(text) {
    return /^[A-Za-z\s]+$/.test(text);
}

function emailValidation(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function phoneValidation(phone) {
    return /^\d{9}$/.test(phone);
}

function passwordValidation(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password);
}

export {
    textValidation,
    emailValidation,
    phoneValidation,
    passwordValidation,
}