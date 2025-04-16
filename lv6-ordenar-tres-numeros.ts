/* Dado tres números, ordénalos de menor a mayor sin usar arrays ni métodos de ordenamiento. */

let p: number = 20;
let s: number = -10;
let t: number = 3;

function menoramayor(a: number,b: number,c: number): string{


  if((a>b) && (a>c)){
    if(b>c){
      return `el orden de ${a}, ${b} y ${c} :  ${c} ${b} ${a}`;
    }else{
      return `el orden de ${a}, ${b} y ${c} :  ${b} ${c} ${a}`;
    }
  }else{
    if(b>c){
      if(c>a){
        return `el orden de ${a}, ${b} y ${c} :  ${a} ${c} ${b}`;
      }else{
        return `el orden de ${a}, ${b} y ${c} :  ${c} ${a} ${b}`;
      }
    }else{
      if(b>a){
        return `el orden de ${a}, ${b} y ${c} :  ${a} ${b} ${c}`;
      }else{
        return `el orden de ${a}, ${b} y ${c} :  ${b} ${a} ${c}`;
      }
    }
  }
}

console.log(menoramayor(p,s,t));