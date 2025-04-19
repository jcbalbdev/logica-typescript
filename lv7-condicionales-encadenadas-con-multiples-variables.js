"use strict";
/* Si una persona tiene más de 18 años, un carnet válido y no tiene multas, puede conducir. Evalúa con if. */
function permisoDeConducir({ edadPersona, carnetValido, tieneMultas }) {
    if (edadPersona <= 18) {
        return `no puede conducir es menor de edad`;
    }
    if (!carnetValido) {
        return `no puede conducir su carnet no es valido`;
    }
    if (tieneMultas) {
        return `no puede conducir tiene multas`;
    }
    return `si puede conducir cumple con todo`;
}
let batman = {
    edadPersona: 21,
    carnetValido: true,
    tieneMultas: true
};
console.log(permisoDeConducir(batman));
