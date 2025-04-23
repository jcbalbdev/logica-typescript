/* Declara una variable esPremium: boolean y usa el operador ternario para mostrar un mensaje diferente según su valor. */

let esPremium: boolean = false;

function mensaje(valor: boolean): string{
  let respuesta: string = valor? "es true" : "es false";
  
  return respuesta;
}

console.log(mensaje(esPremium));