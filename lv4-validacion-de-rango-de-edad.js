"use strict";
/* Según la edad, clasifica: niño (0-12), adolescente (13-17), adulto (18-59), adulto mayor (60+). */
let userUno = {
    nombre: "pedro pascal",
    edad: 23
};
let userDos = {
    nombre: "barry allen",
    edad: 15
};
let userTres = {
    nombre: "bruce wayne",
    edad: 62
};
let userCuatro = {
    nombre: "dexter",
    edad: 11
};
function censo(nombre, edad) {
    if ((edad >= 0) && (edad <= 12)) {
        return `${nombre} es un niño`;
    }
    else if ((edad > 12) && (edad <= 17)) {
        return `${nombre} es un adolescente`;
    }
    else if ((edad >= 18) && (edad < 60)) {
        return `${nombre} es un adulto`;
    }
    else if (edad > 60) {
        return `${nombre} es un adulto mayor`;
    }
    else {
        return "edad incorrecta";
    }
}
console.log(censo(userUno.nombre, userUno.edad));
console.log(censo(userDos.nombre, userDos.edad));
console.log(censo(userTres.nombre, userTres.edad));
console.log(censo(userCuatro.nombre, userCuatro.edad));
