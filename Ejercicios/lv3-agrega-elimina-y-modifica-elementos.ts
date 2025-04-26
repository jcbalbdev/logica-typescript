/* Usa push, pop, shift, unshift, y reasignación de índice para manipular un array. */

let misFrutas: string[] = ["manzana", "platano","pera","naranja"]

function agregaAlFinal(lista: string[],fruta: string): string{
  lista.push(fruta);

  return `se agrego ${fruta}  a la lista. la nueva lista es ${lista}`
}

console.log(agregaAlFinal(misFrutas,"mandarina"))