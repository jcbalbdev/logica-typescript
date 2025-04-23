"use strict";
/* Crea un objeto tipo Persona con nombre, edad, y email. Luego convierte ese objeto a JSON (string) y vuelve a convertirlo a objeto. */
let invitado = {
    nombre: "juan perez",
    edad: 43,
    email: "perez@gmail.com"
};
let jsoninvitado = JSON.stringify(invitado);
console.log(jsoninvitado);
console.log(typeof jsoninvitado);
let objectjson = JSON.parse(jsoninvitado);
console.log(objectjson);
console.log(typeof objectjson);
