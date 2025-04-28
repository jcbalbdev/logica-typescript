/* Muestra todas las claves y valores del objeto persona. */
interface Mueble{
  nombre:string;
  material:string;
}

let mesa: Mueble = {
  nombre: "mesa",
  material: "madera"
}

for(let propiedad in mesa){
  console.log(`${propiedad} : ${mesa[propiedad as keyof typeof mesa]}`)
}