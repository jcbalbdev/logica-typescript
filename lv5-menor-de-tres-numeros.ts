/* Dado tres números, encuentra el menor usando if. */

let prim: number = 230;
let seg: number = 1;
let terc: number = 32;

function elMenorEs(a: number,b: number,c: number): string{
  if (a<=b) {
    if(b<c){
      return `el numero ${c} es el mayor`;
    }else{
      return `el numero ${b} es el mayor`;
    }
  }else{
    if(a<c){
      return `el numero ${c} es el mayor`;
    }else{
      return `el numero ${a} es el mayor`;
    }
  }

}

console.log(elMenorEs(prim,seg,terc));
