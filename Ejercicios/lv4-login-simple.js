"use strict";
/* Simula un sistema de login con usuario y contraseña correctos usando if. */
let login = {
    usuario: "pedrito",
    pass: "la contraseña mas segura del mundo"
};
const { usuario, pass } = login;
function verificandoDatos(user, pass) {
    if ((user === "pedrito") && (pass === "la contraseña mas segura del mundo")) {
        return `se permitio la entrada de  ${user}`;
    }
    else {
        return `no se permitio la entrada de  ${user}, datos incorrectos`;
    }
}
console.log(verificandoDatos(usuario, pass));
