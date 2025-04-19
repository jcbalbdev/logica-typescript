"use strict";
/* Evalúa tres números enteros. Si alguno es igual a la suma de los otros dos, devuelve true, si no, false. */
let np = 0;
let ns = 10;
let nt = 10;
function comparando(pv, sv, tv) {
    return (pv === (sv + tv)) || (sv === (pv + tv)) || (tv === (sv + pv));
}
console.log(comparando(np, ns, nt));
