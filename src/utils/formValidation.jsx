function textValidation(text) {
    return /^[A-Za-zÀ-ÿ\u00f1\u00d1\0-9\s]+$/g.test(text);
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

function precioValidation(precio) {
    return /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(precio);
}

export {
    textValidation,
    emailValidation,
    phoneValidation,
    passwordValidation,
    precioValidation,
}