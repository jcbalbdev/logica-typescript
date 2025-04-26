/* Usa filter para devolver solo los números pares de un array del 1 al 10. */

let misNumeros: number[] = [1,2,3,5,7,8,10,9,4,6];

function buscarPar(lista: number[]){
  let listaPares: number[] = lista.filter((numero) => numero%2===0);

  return `la lista de numero es ${lista} y la lista de numeros pares ue contiene esa lista es ${listaPares}`
}

console.log(buscarPar(misNumeros));