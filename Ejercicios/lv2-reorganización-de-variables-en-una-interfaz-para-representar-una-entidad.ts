/* Declara una interfaz llamada Libro que represente la estructura de un objeto con las propiedades: titulo (tipo string), costo (tipo number) y edicion (tipo string).
Luego, crea una variable llamada libro de tipo Libro y asígnale un objeto con datos reales */

interface Libro{
  titulo:string;
  costo:number;
  edicion:string;
}

let libroUno: Libro = {
  titulo : "cronicas marcianas",
  costo: 21,
  edicion:"N°1"
}

