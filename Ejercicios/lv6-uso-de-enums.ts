/* Declara un enum para representar los días de la semana. Luego crea una variable con uno de esos valores y muestra un mensaje dependiendo del día. */

enum Rol {
  Admin = "admin",
  Comun = "comun"
}

let rolPepe: Rol = Rol.Admin;

console.log(`el rol de Pepe es ${rolPepe}`);
