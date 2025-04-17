/* Según el color (rojo, amarillo, verde), muestra qué hacer: "Detente", "Precaución", "Avanza". */

enum Color {
  Rojo = "Detente",
  Amarillo = "Precaución",
  Verde = "Avanza"
}

function semaforoEn(color: Color): string{
  if (color === Color.Rojo) {
    return `el semaforo esta en rojo asi que ${Color.Rojo}`;
  } else if(color === Color.Amarillo){
    return `el semaforo esta en amarillo asi que ${Color.Amarillo}`;
  } else if(color === Color.Verde){
    return `el semaforo esta en verde asi que ${Color.Verde}`;
  }else{
    return `el semaforo esta apagado`;
  }
}

console.log(semaforoEn(Color.Amarillo));

