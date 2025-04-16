/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */

interface User {
  rol:string;
  logueado:boolean;
}


let pedrito: User = {
  rol:"admin",
  logueado:true
}

let pascal: User = {
  rol:"editor",
  logueado:true
}

let barry: User = {
  rol:"editor",
  logueado:false
}

function evaluandoPermiso({rol,logueado}: User): string{
  
  if(((rol === "admin") || (rol === "editor") || (rol === "visitante")) && (logueado === true)){
    return "acceso permitido";
  }else{
    return "acceso denegado";
  }

  
}

console.log(evaluandoPermiso(barry));
