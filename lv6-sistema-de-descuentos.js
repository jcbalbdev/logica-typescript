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
    switch (cliente) {
        case Cliente.Nuevo:
            ;
            return (montoNum >= 1000) ? `Descuento del 25% por ser nuevo cliente, monto final: ${montoNum - (montoNum * 0.25)}` : `Descuento del 10% por ser nuevo cliente, monto final: ${montoNum - (montoNum * 0.10)}`;
        case Cliente.Frecuente:
            return (montoNum >= 1000) ? `Descuento del 40% por ser cliente frecuente, monto final: ${montoNum - (montoNum * 0.40)}` : `Descuento del 15% por ser cliente frecuente, monto final: ${montoNum - (montoNum * 0.15)}`;
        case Cliente.Vip:
            return (montoNum >= 1000) ? `Descuento del 20% por ser cliente frecuente, monto final: ${montoNum - (montoNum * 0.50)}` : `Descuento del 10% por ser cliente frecuente, monto final: ${montoNum - (montoNum * 0.20)}`;
        default:
            return `el cliente no pertenece a la tienda`;
    }
}
console.log(descuento(Cliente.Nuevo, "1500"));
