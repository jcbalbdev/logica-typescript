/* Usa reduce para sumar todos los elementos de un array numérico. */
let listaNum: number[] = [1,2,3,4,1,5,7,9,10];

function sumaConAcumulador(lista: number[]): string{
  let sumaDeElementos: number = lista.reduce((acc,numero)=>{
    return acc+numero; 
  },0);
  return `la suma de esta lista (${lista}) es : ${sumaDeElementos} `; 
}

