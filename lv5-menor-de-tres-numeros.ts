/* Dado tres números, encuentra el menor usando if. */

let prim: number = 2;
let seg: number = 1;
let terc: number = 3;

function elMenorEs(a: number,b: number,c: number): string{
  if (a<=b) {
    if(a<c){
      return `el numero ${a} es el menor`;
    }else{
      return `el numero ${c} es el menor`;
    }
  }else{
    if(b<c){
      return `el numero ${b} es el menor`;
    }else{
      return `el numero ${c} es el menor`;
    }
  }

}

console.log(elMenorEs(prim,seg,terc));
