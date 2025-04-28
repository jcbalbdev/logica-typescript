/* Accede al email del segundo usuario de un array de objetos. */
interface MisUsuarios {
  nombre: string;
  email:string;
  edad:number;
}

let miListaUsuarios: MisUsuarios[] = [
  {
    nombre:"Barry",
    email:"barry@gmail.com",
    edad:12
  },
  {
    nombre:"Diana",
    email:"diana@gmail.com",
    edad:23
  },
  {
    nombre:"Bruce",
    email:"soybatman@gmail.com",
    edad:32
  }
]

console.log(`el email del segundo usuario de un array de objetos es ${miListaUsuarios[1]["email"]}`)