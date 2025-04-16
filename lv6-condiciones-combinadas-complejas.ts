/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */

interface User {
  rol:string;
  logueado:boolean;
}


let pedrito: User = {
  rol:"admin",
  logueado:true
}

function evaluandoPermiso({rol,logueado}: User): string{
  let respuesta: string = ((rol === "admin") && (logueado === true))?"pase permitido":"pase denegado";

  return respuesta;
}

console.log(evaluandoPermiso(pedrito));
