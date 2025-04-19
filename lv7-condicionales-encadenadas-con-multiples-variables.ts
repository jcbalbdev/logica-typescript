/* Si una persona tiene más de 18 años, un carnet válido y no tiene multas, puede conducir. Evalúa con if. */

interface Conductor{
  edadPersona:number;
  carnetValido:boolean;
  tieneMultas:boolean;
}

function permisoDeConducir({edadPersona,carnetValido,tieneMultas}: Conductor): string{
  
  let condicion: boolean = ((edadPersona > 18) || (carnetValido === true) || (tieneMultas === false));
  
  if(condicion){
    return `la persona puede conducir`;
  }else{
    return `la persona no puede conducir`;
  }
}

let batman: Conductor = {
  edadPersona:21,
  carnetValido:true,
  tieneMultas:false
}


console.log(permisoDeConducir(batman));