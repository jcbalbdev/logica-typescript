"use strict";
/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */
var Rol;
(function (Rol) {
    Rol["Administrador"] = "admin";
    Rol["Editor"] = "editor";
    Rol["Visitante"] = "visitante";
})(Rol || (Rol = {}));
const rolesPermitidos = [Rol.Administrador, Rol.Editor, Rol.Visitante];
let pedrito = {
    rol: Rol.Administrador,
    logueado: true
};
let pascal = {
    rol: Rol.Editor,
    logueado: true
};
let aristoteles = {
    rol: Rol.Visitante,
    logueado: false
};
function evaluandoPermiso({ rol, logueado }) {
    if ((rolesPermitidos.includes(rol)) && (logueado === true)) {
        return `el usuario es ${rol} y puede pasar`;
    }
    else {
        return `el usuario es ${rol} y su acceso esta denegado`;
    }
}
console.log(evaluandoPermiso(pedrito));
