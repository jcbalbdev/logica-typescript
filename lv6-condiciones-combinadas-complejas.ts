/* Dado el rol de un usuario (admin, editor, visitante) y si está logueado, muestra los permisos. Usa condiciones anidadas y lógicas. */

enum Rol {
  Administrador = "admin",
  Editor = "editor",
  Visitante = "visitante"
}

interface User{
  rol:Rol;
  logueado:boolean;
}

const rolesPermitidos: Rol[] = [Rol.Administrador,Rol.Editor,Rol.Visitante];

let pedrito: User = {
  rol: Rol.Administrador,
  logueado: true
}

let pascal: User = {
  rol: Rol.Editor,
  logueado: true
}

let aristoteles: User = {
  rol: Rol.Visitante,
  logueado: false
}
function evaluandoPermiso({rol,logueado}: User): string{
  if((rolesPermitidos.includes(rol)) && (logueado === true)){
    return `el usuario es ${rol} y puede pasar`;
  }else{
    return `el usuario es ${rol} y su acceso esta denegado`;
  }
}

console.log(evaluandoPermiso(pascal));