"use strict";
/* Recorre un array de nombres y muestra cada uno en consola. */
var Nombre;
(function (Nombre) {
    Nombre["Bruce"] = "bruce";
    Nombre["Barry"] = "barry";
    Nombre["Clark"] = "clark";
})(Nombre || (Nombre = {}));
let alumnos = [Nombre.Barry, Nombre.Bruce, Nombre.Clark];
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}
