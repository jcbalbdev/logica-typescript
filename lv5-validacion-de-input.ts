/* Simula una entrada del usuario para ingresar un número. Valida si es realmente un número y muestra un error si no lo es. */

let codigo: number | string = "34";

function evaluandoCodigo(codigo: number | string): string{
  let tipo = typeof(codigo);
  switch (tipo) {
    case "number" :
      return `es de tipo number`;
    case "string" :
      return `es de tipo string`;
    default:
      return `tipo invalido`;
  }
}

console.log(evaluandoCodigo(codigo));
