"use strict";
/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */
let pedrito = {
    rol: "admin",
    logueado: true
};
function evaluandoPermiso({ rol, logueado }) {
    let respuesta = ((rol === "admin") && (logueado === true)) ? "pase permitido" : "pase denegado";
    return respuesta;
}
console.log(evaluandoPermiso(pedrito));
