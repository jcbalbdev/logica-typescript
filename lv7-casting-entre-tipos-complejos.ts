/* Crea un objeto tipo Persona con nombre, edad, y email. Luego convierte ese objeto a JSON (string) y vuelve a convertirlo a objeto. */

interface Persona {
  nombre:string;
  edad:number;
  email:string;
}

let invitado: Persona = {
  nombre:"juan perez",
  edad:43,
  email:"perez@gmail.com"
}

let jsoninvitado = JSON.stringify(invitado);
console.log(jsoninvitado);
console.log(typeof jsoninvitado);

let objectjson: Persona = JSON.parse(jsoninvitado);
console.log(objectjson);
console.log(typeof objectjson); 

