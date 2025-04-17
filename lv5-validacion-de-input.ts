/* Simula una entrada del usuario para ingresar un número. Valida si es realmente un número y muestra un error si no lo es. */

/* en casos reales el formulario recibe solo string aunque escribas 123 */

let codigo: string = "1jafjlhahfgakbc";

function validandoCodigo(codigo: string): string{
  let codigoNumerico = Number(codigo);
  if (!isNaN(codigoNumerico)) {
    return `Código correcto`;
  } else {
    return `Código incorrecto ingresa un numero`;
  }
}


console.log(validandoCodigo(codigo));