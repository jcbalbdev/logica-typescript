/* Dado tres números, ordénalos de menor a mayor sin usar arrays ni métodos de ordenamiento. */

let p: number = 0;
let s: number = -10;
let t: number = 3;

function menoramayor(a: number,b: number,c: number): string{
  let primero: number;
  let segundo: number;
  let tercero: number;
  if (a <=b && a<=c) {
    primero = a;
    if(b<=c){
      segundo=b;
      tercero=c;
    }else{
      segundo=c;
      tercero=b;
    }
  }else if (b <= a && b <= c) {
    primero = b;
    if (a <= c) {
      segundo = a;
      tercero = c;
    } else {
      segundo = c;
      tercero = a;
    }
  } else {
    primero = c;
    if (a <= b) {
      segundo = a;
      tercero = b;
    } else {
      segundo = b;
      tercero = a;
    }
  }

  return `El orden de ${a}, ${b} y ${c} es: ${primero} ${segundo} ${tercero}`;
}

console.log(menoramayor(p,s,t));