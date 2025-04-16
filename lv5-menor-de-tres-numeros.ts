/* Dado tres números, encuentra el menor usando if. */

let prim: number = 2;
let seg: number = 1;
let terc: number = 3;

function elMenorEntre(a: number,b: number,c :number): string{
  let menor = a;
  if(b<menor){
    menor=b;
  }
  if(c<menor){
    menor=c;
  }
  return `el menor es ${menor}`;
}

console.log(elMenorEntre(prim,seg,terc));
