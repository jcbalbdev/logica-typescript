/* Evalúa tres números enteros. Si alguno es igual a la suma de los otros dos, devuelve true, si no, false. */

let np: number = 0;
let ns: number = 10;
let nt: number = 10;

function comparando(pv: number,sv: number,tv: number): boolean{
  if ((pv-(sv+tv) === 0) || (sv-(pv+tv) === 0) || (tv-(sv+pv) === 0) ) {
    return true;
  } else {
    return false
  }
}

console.log(comparando(np,ns,nt));
