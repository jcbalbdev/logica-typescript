/* Evalúa tres números enteros. Si alguno es igual a la suma de los otros dos, devuelve true, si no, false. */

let np: number = 0;
let ns: number = 10;
let nt: number = 10;

function comparando(pv: number,sv: number,tv: number): boolean{
  return (pv === (sv+tv)) || (sv === (pv+tv)) || (tv === (sv+pv))
}

console.log(comparando(np,ns,nt));
