/* Convierte un objeto a array y viceversa . Usa Object.entries, Object.fromEntries, Object.keys y Object.values. */

interface Pokemon{
  nombre:string;
  tipo:string;
}

let pikachu: Pokemon = {
  nombre: "pikachu",
  tipo:"electrico"
}

let usandoObjectkeys: string[] = Object.keys(pikachu);
console.log(usandoObjectkeys);

let usandoObjectvalues: any[] = Object.values(pikachu);
console.log(usandoObjectvalues);

