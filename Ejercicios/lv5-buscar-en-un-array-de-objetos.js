"use strict";
/* Usa find para encontrar el producto con mayor precio en una lista.*/
let listaDeProductos = [
    {
        nombre: "mesa gamer",
        precio: 48
    },
    {
        nombre: "silla gamer",
        precio: 36
    },
    {
        nombre: "mouse gamer",
        precio: 56
    },
    {
        nombre: "teclado gamer",
        precio: 340
    }
];
let precioMax = Math.max(...listaDeProductos.map((producto) => producto.precio));
let mayorPrecio = listaDeProductos.find((producto) => producto.precio === precioMax);
console.log(mayorPrecio.nombre);
