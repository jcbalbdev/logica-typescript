/* Declara un array de números y muestra el primero, último y la longitud del array. */
enum Cumpleaño{
  Bruce = 1,
  Diana  = 2,
  Clark = 12,
  Barry = 23
}

let cumpleañosMarzo: Cumpleaño[] = [Cumpleaño.Bruce,Cumpleaño.Diana,Cumpleaño.Clark,Cumpleaño.Barry];

console.log(`la cantidad de personas que cumples años en marzo son ${cumpleañosMarzo.length} , el primero en cumplir años es ${cumpleañosMarzo[0]} y el ultimo es ${cumpleañosMarzo[3]}`);
