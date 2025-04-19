"use strict";
/* Evalúa tres números enteros. Si alguno es igual a la suma de los otros dos, devuelve true, si no, false. */
let np = 2;
let ns = 3;
let nt = 4;
function comparando(pv, sv, tv) {
    if ((pv - (sv + tv) === 0) || (sv - (pv + tv) === 0) || (tv - (sv + pv) === 0)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(comparando(np, ns, nt));
