/* Usa push, pop, shift, unshift, y reasignación de índice para manipular un array. */

let misFrutas: string[] = ["manzana", "platano","pera","naranja"]

function agregaAlFinal(lista: string[],fruta: string): string{
  lista.push(fruta);

  return `se agrego ${fruta} al final de la lista. la nueva lista es ${lista}`
}

console.log(agregaAlFinal(misFrutas,"mandarina"))

function eliminaElFinal(lista: string[]){
  lista.pop();

  return `se elimino la ultima fruta de la lista. la nueva lista es ${lista}`
}

console.log(eliminaElFinal(misFrutas));

function agregaAlInicio(lista: string[],fruta: string): string{
  lista.unshift(fruta);

  return `se agrego ${fruta} al principio de la lista. la nueva lista es ${lista}`
}

console.log(agregaAlInicio(misFrutas,"mango"))

function eliminaElInicio(lista: string[]){
  lista.shift();

  return `se elimino la primera fruta de la lista. la nueva lista es ${lista}`
}

console.log(eliminaElInicio(misFrutas));

function cambioDeFruta(lista: string[],posicion: number,fruta: string){
  lista[posicion] = fruta;

  return `se cambio la fruta de la posicion ${posicion} y se agrego la  fruta ${fruta}. la nueva lista es ${lista} `
}

console.log(cambioDeFruta(misFrutas,2,"coco"));