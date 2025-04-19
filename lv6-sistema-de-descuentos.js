"use strict";
/* Según el tipo de cliente (nuevo, frecuente, vip) y el monto de compra, asigna un descuento distinto.
 */
var Cliente;
(function (Cliente) {
    Cliente["Nuevo"] = "nuevo";
    Cliente["Frecuente"] = "frecuente";
    Cliente["Vip"] = "vip";
})(Cliente || (Cliente = {}));
function descuento(cliente, monto) {
    let montoNum = Number(monto);
    let porcentaje;
    let mensajeCliente;
    switch (cliente) {
        case Cliente.Nuevo:
            porcentaje = montoNum >= 1000 ? 0.25 : 0.10;
            mensajeCliente = "nuevo cliente";
            break;
        case Cliente.Frecuente:
            porcentaje = montoNum >= 1000 ? 0.40 : 0.15;
            mensajeCliente = "cliente frecuente";
            break;
        case Cliente.Vip:
            porcentaje = montoNum >= 1000 ? 0.50 : 0.20;
            mensajeCliente = "cliente VIP";
            break;
        default:
            return "El cliente no pertenece a la tienda";
    }
    let montoFinal = montoNum - montoNum * porcentaje;
    let porcentajeTexto = String(porcentaje * 100);
    return `Descuento del ${porcentajeTexto}% por ser ${mensajeCliente}, monto final: ${montoFinal}`;
}
console.log(descuento(Cliente.Frecuente, "1500"));
