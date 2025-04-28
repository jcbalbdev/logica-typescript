/* Accede a propiedades de un objeto, modifica una y elimina otra. */

interface SuperHeroe {
  nombre:string;
  "equipo de superhéroes"?:string;
  poder:string;
}

let flash: SuperHeroe = {
  nombre: "Barry Allen",
  "equipo de superhéroes" : "liga de la justicia",
  poder:  "velocidad"
}

console.log(`el nombre del super heroe es ${flash.nombre} y pertenece a la ${flash["equipo de superhéroes"]}`);

flash.poder = "super velocidad";
console.log(`su super poder es ${flash.poder}`);

delete flash["equipo de superhéroes"];
console.log(flash);
