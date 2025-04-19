/* Según el tipo de cliente (nuevo, frecuente, vip) y el monto de compra, asigna un descuento distinto.
 */

enum Cliente{
  Nuevo = "nuevo",
  Frecuente = "frecuente",
  Vip = "vip"
}

function descuento(cliente: Cliente,monto: string): string{
  let montoNum: number = Number(monto);
  let porcentaje: number;
  let mensajeCliente: string;

  switch (cliente){
    case Cliente.Nuevo :
      porcentaje = montoNum >= 1000?0.25:0.10;
      mensajeCliente = "nuevo cliente";
      break;
    case Cliente.Frecuente :
      porcentaje = montoNum >= 1000?0.40:0.15;
      mensajeCliente = "cliente frecuente";
      break;
    case Cliente.Vip :
      porcentaje = montoNum >= 1000?0.50:0.20;
      mensajeCliente = "cliente VIP";
      break;
    default:
      return "El cliente no pertenece a la tienda";
  }

  let montoFinal: number = montoNum - montoNum*porcentaje;
  let porcentajeTexto: string = String(porcentaje*100);

  return `Descuento del ${porcentajeTexto}% por ser ${mensajeCliente}, monto final: ${montoFinal}`; 
}

console.log(descuento(Cliente.Vip,"1500"));
