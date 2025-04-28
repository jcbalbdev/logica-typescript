/* Accede a propiedades de un objeto, modifica una y elimina otra. */

interface SuperHeroe {
  nombre:string;
  "equipo de superherores":string;
  poder:string;
}

let flash: SuperHeroe = {
  nombre: "Barry Allen",
  "equipo de superherores" : "liga de la justicia",
  poder:  "velocidad"
}

console.log(`el nombre del super heroe es ${flash.nombre} y pertenece a la ${flash["equipo de superherores"]}`);

console.log(``)
