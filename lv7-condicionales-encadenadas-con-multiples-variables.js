"use strict";
/* Si una persona tiene más de 18 años, un carnet válido y no tiene multas, puede conducir. Evalúa con if. */
function permisoDeConducir({ edadPersona, carnetValido, tieneMultas }) {
    if (edadPersona > 18 && carnetValido && !tieneMultas) {
        return `la persona puede conducir`;
    }
    else {
        return `la persona no puede conducir`;
    }
}
let batman = {
    edadPersona: 21,
    carnetValido: true,
    tieneMultas: false
};
console.log(permisoDeConducir(batman));
