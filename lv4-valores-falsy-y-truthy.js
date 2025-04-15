"use strict";
/* Declara variables con valores como 0, "", null, undefined, NaN y observa cómo se comportan en una condición if. */
const cero = 0;
const textoVacio = "";
const nulo = null;
const indefinido = undefined;
const noNumero = NaN;
if (cero) {
    console.log("es verdadero");
}
else {
    console.log(`es 0 es falso y de tipo ${typeof cero}`);
}
if (textoVacio) {
    console.log("es verdadero");
}
else {
    console.log(`es textoVacio es falso y de tipo ${typeof textoVacio}`);
}
if (nulo) {
    console.log("es verdadero");
}
else {
    console.log(`es nulo es falso y de tipo ${typeof nulo}`);
}
if (indefinido) {
    console.log("es verdadero");
}
else {
    console.log(`es indefinido es falso y de tipo ${typeof indefinido}`);
}
if (noNumero) {
    console.log("es verdadero");
}
else {
    console.log(`es noNumero es falso y de tipo ${typeof noNumero}`);
}
