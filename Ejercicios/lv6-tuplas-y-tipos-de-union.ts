/* Declara una tupla con un string y un número. Luego declara una variable que pueda ser string | number y muestra cómo cambiar su valor. */

let datos: [string,number] = ["pepito",32];

let dato: string | number;

dato = datos[0];
console.log(dato);
dato = datos[1];
console.log(dato);