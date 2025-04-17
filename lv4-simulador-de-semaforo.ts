/* Según el color (rojo, amarillo, verde), muestra qué hacer: "Detente", "Precaución", "Avanza". */

enum Color{
  Rojo = "rojo",
  Verde = "verde",
  Amarillo = "amarillo"
}

function semaforoEn(color: Color): string{
  switch (color) {
    case Color.Rojo:
      return `El semáforo está en ${color}, así que Detente`;
    case Color.Amarillo:
      return `El semáforo está en ${color}, así que Precaución`;
    case Color.Verde:
      return `El semáforo está en ${color}, así que Avanza`;
    default:
      return "El semáforo está apagado";
  }
}

console.log(semaforoEn(Color.Verde));

