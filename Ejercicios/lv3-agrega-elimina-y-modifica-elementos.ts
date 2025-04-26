/* Usa push, pop, shift, unshift, y reasignación de índice para manipular un array. */

let misFrutas: string[] = ["manzana", "platano","pera","naranja"]

function agregaAlFinal(lista: string[],fruta: string): string{
  let listaOriginal: string[] = [...lista];
  lista.push(fruta);

  return `se agrego ${fruta} al final de la lista ${listaOriginal}. la nueva lista es ${lista}`
}

console.log(agregaAlFinal(misFrutas,"mandarina"))

function eliminaElFinal(lista: string[]){
  let listaOriginal: string[] = [...lista];
  lista.pop();

  return `se elimino la ultima fruta de la lista ${listaOriginal}. la nueva lista es ${lista}`
}

console.log(eliminaElFinal(misFrutas));

function agregaAlInicio(lista: string[],fruta: string): string{
  let listaOriginal: string[] = [...lista];
  lista.unshift(fruta);

  return `se agrego ${fruta} al principio de la lista ${listaOriginal}. la nueva lista es ${lista}`
}

console.log(agregaAlInicio(misFrutas,"mango"))

function eliminaElInicio(lista: string[]){
  let listaOriginal: string[] = [...lista];
  lista.shift();

  return `se elimino la primera fruta de la lista ${listaOriginal}. la nueva lista es ${lista}`
}

console.log(eliminaElInicio(misFrutas));

function cambioDeFruta(lista: string[],posicion: number,fruta: string){
  let listaOriginal: string[] = [...lista];
  lista[posicion] = fruta;

  return `se cambio la fruta de la posicion ${posicion + 1} y se agrego la  fruta ${fruta}. la nueva lista es ${lista} `
}

console.log(cambioDeFruta(misFrutas,2,"coco"));