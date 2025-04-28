"use strict";
let mesa = {
    nombre: "mesa",
    material: "madera"
};
for (let propiedad in mesa) {
    console.log(`${propiedad} : ${mesa[propiedad]}`);
}
