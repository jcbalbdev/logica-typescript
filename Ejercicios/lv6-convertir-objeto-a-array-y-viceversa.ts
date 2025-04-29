/* Convierte un objeto a array y viceversa . Usa Object.entries, Object.fromEntries, Object.keys y Object.values. */

interface Pokemon{
  nombre:string;
  tipo:string;
}

let pikachu: Pokemon = {
  nombre: "pikachu",
  tipo:"electrico"
}

let usandoObjectkeys: string[] = Object.keys(pikachu) as (keyof Pokemon)[];
console.log(usandoObjectkeys);

let usandoObjectvalues: (string | number)[] = Object.values(pikachu);
console.log(usandoObjectvalues);

let DeObjetoaArray : [string ,string | number][] = Object.entries(pikachu);
console.log(DeObjetoaArray);

let DeArrayaObjeto = Object.fromEntries(DeObjetoaArray);
console.log(DeArrayaObjeto);
