"use strict";
/* Declara un objeto producto con nombre, precio, stock. Extrae sus valores usando desestructuración */
let itemUno = {
    nombre: "jabon",
    precio: 5,
    stock: 23
};
let itemDos = {
    nombre: "shampoo",
    precio: 10,
    stock: 27
};
const { nombre: nombreItemUno, precio: precioItemUno, stock: stockItemUno } = itemUno;
const { nombre: nombreItemDos, precio: precioItemDos, stock: stockItemDos } = itemDos;
console.log(`En la tienda solo quedan dos productos : ${nombreItemUno} y ${nombreItemDos} cuyos precios son ${precioItemUno} y ${precioItemDos}`);
