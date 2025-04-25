/* Crea un array con frutas y muéstralo con console.log. */
enum Fruta{
  Manzana = "manzana",
  Platano = "platano",
  Mandarina = "mandarina",
  Pera = "pera"
}

let frutas: Fruta[] = [Fruta.Manzana,Fruta.Platano,Fruta.Pera,Fruta.Mandarina];

console.log(`las frutas que necesitamos hoy son ${frutas[0]} ,${frutas[1]} ,${frutas[2]} y ${frutas[3]}`);