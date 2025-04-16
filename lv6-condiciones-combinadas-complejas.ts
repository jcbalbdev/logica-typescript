/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */
enum Rol {
  Administrador = "admin",
  Editor = "editor",
  Visitante = "visitante"
}


interface User {
  rol:Rol;
  logueado:boolean;
}


let pedrito: User = {
  rol:Rol.Administrador,
  logueado:true
}

let pascal: User = {
  rol:Rol.Editor,
  logueado:true
}

let barry: User = {
  rol:Rol.Visitante,
  logueado:true
}

const rolesPermitidos: Rol[] = [Rol.Admin, Rol.Editor, Rol.Visitante];;

function evaluandoPermiso({rol,logueado}: User): string{
  
  if((rolesPermitidos.includes(rol)) && (logueado === true)){
    return "acceso permitido";
  }else{
    return "acceso denegado";
  }

  
}

console.log(evaluandoPermiso(barry));
