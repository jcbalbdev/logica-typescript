/* Según la edad, clasifica: niño (0-12), adolescente (13-17), adulto (18-59), adulto mayor (60+). */

interface Personarandom{
  nombre:string;
  edad:number;
}

let userUno: Personarandom ={
  nombre:"pedro pascal",
  edad:23
}

let userDos: Personarandom = {
  nombre:"barry allen",
  edad:15
}

let userTres: Personarandom = {
  nombre:"bruce wayne",
  edad:62
}

let userCuatro: Personarandom = {
  nombre:"dexter",
  edad:11
}

function censo(nombre: string,edad: number): string{
  if((edad >= 0) && (edad <= 12)){
    return `${nombre} es un niño`;
  }else if((edad > 12) && (edad <= 17)){
    return `${nombre} es un adolescente`;
  }else if((edad >=18) && (edad < 60)){
    return `${nombre} es un adulto`;
  }else if(edad > 60){
    return `${nombre} es un adulto mayor`;
  }else{
    return "edad incorrecta";
  }
}

console.log(censo(userUno.nombre,userUno.edad));
console.log(censo(userDos.nombre,userDos.edad));
console.log(censo(userTres.nombre,userTres.edad));
console.log(censo(userCuatro.nombre,userCuatro.edad));


