/* Escribe un programa que evalúe una nota (A, B, C, etc.) y dé un mensaje. Agrupa varios casos que tengan el mismo mensaje. */

let nota: string = "B";

switch (nota){
  case "A":
  case "B":
    console.log("esta aprobado");
  break;
  case "C":
  case "D":
    console.log("esta en el promedio");
  break;
  case "E":
    console.log("esta desaprobado");
  break;
  default:
    console.log("repetiste el curso");
  break;
}
