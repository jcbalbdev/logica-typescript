"use strict";
/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */
var Rol;
(function (Rol) {
    Rol["Administrador"] = "admin";
    Rol["Editor"] = "editor";
    Rol["Visitante"] = "visitante";
})(Rol || (Rol = {}));
let pedrito = {
    rol: Rol.Administrador,
    logueado: true
};
let pascal = {
    rol: Rol.Editor,
    logueado: true
};
let barry = {
    rol: Rol.Visitante,
    logueado: true
};
const rolesPermitidos = [Rol.Admin, Rol.Editor, Rol.Visitante];
;
function evaluandoPermiso({ rol, logueado }) {
    if ((rolesPermitidos.includes(rol)) && (logueado === true)) {
        return "acceso permitido";
    }
    else {
        return "acceso denegado";
    }
}
console.log(evaluandoPermiso(barry));
