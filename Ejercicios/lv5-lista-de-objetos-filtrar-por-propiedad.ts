/* Dada una lista de personas con nombre y edad, filtra los mayores de 18. */

interface DatosPersona{
  nombre:string;
  edad:number;
}

let listaPersonas: DatosPersona[] = [
  {
    nombre:"pedro",
    edad:32
  },
  {
    nombre:"bruce",
    edad:12
  },
  {
    nombre:"barry",
    edad:18
  }
]

let mayores = listaPersonas.filter((personas)=>personas.edad>18);
