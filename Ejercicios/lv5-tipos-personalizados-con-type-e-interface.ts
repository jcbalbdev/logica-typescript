/* Crea un tipo Usuario con nombre (string), edad (number) y activo (boolean). Declara una variable con ese tipo y muestra sus propiedades.

 */

type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
}

let user: Usuario = {
  nombre: 'jose',
  edad: 32,
  activo: true
}

console.log(`el usuario se llama ${user.nombre},tiene ${user.edad} y esta ${user.activo} en la empresa`);
