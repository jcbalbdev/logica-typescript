"use strict";
/* Declara un enum para representar los días de la semana. Luego crea una variable con uno de esos valores y muestra un mensaje dependiendo del día. */
var Rol;
(function (Rol) {
    Rol["Admin"] = "admin";
    Rol["Comun"] = "comun";
})(Rol || (Rol = {}));
let rolPepe = Rol.Admin;
console.log(`el rol de Pepe es ${rolPepe}`);
