"use strict";
/* Simula un sistema de seguridad: acceso permitido solo si tiene tarjeta y no está bloqueado. */
let empleado = {
    tarjeta: true,
    bloqueado: false
};
function acceso(tarjeta, estaBloqueado) {
    if ((tarjeta === true) && (!estaBloqueado === true)) {
        return "el empleado tiene acceso";
    }
    else {
        return "el empleado no tiene acceso";
    }
}
