/* Simula un sistema de seguridad: acceso permitido solo si tiene tarjeta y no está bloqueado. */

interface Trabajador{
  tarjeta:boolean;
  bloqueado:boolean;
}

let empleado: Trabajador ={
  tarjeta:true,
  bloqueado:false
}

function acceso(tarjeta: boolean,estaBloqueado: boolean): string{
  if ((tarjeta === true) && (!estaBloqueado === true)) {
    return "el empleado tiene acceso";
  } else {
    return "el empleado no tiene acceso";
  }
}

