/* Simula un sistema de login con usuario y contraseña correctos usando if. */

interface Login{
  usuario:string;
  pass:string;
}

let login: Login = {
  usuario: "pedrito",
  pass:"la contraseña mas segura del mundo"
}

const { usuario,pass} = login;

function verificandoDatos(user: string,pass: string): string{
  if((user === "pedrito") && (pass === "la contraseña mas segura del mundo")){
    return `se permitio la entrada de  ${user}`;
  }else{
    return `no se permitio la entrada de  ${user}, usuario no valido`;
  }
}

console.log(verificandoDatos(usuario,pass));