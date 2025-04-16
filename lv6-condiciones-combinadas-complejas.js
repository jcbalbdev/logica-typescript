"use strict";
/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */
let pedrito = {
    rol: "admin",
    logueado: true
};
let pascal = {
    rol: "editor",
    logueado: true
};
let barry = {
    rol: "editor",
    logueado: false
};
function evaluandoPermiso({ rol, logueado }) {
    if (((rol === "admin") || (rol === "editor") || (rol === "visitante")) && (logueado === true)) {
        return "acceso permitido";
    }
    else {
        return "acceso denegado";
    }
}
console.log(evaluandoPermiso(barry));
