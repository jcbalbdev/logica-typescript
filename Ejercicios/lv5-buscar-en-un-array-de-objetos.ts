/* Usa find para encontrar el producto con mayor precio en una lista. */

interface Item{
  nombre:string;
  precio:number;
}

let listaDeProductos: Item[] = [
  {
    nombre:"mesa gamer",
    precio:48
  },
  {
    nombre:"silla gamer",
    precio:36
  },
  {
    nombre:"mouse gamer",
    precio:56
  },
  {
    nombre:"teclado gamer",
    precio:34
  }
]

let mayorPrecio = listaDeProductos.find((producto)=>Math.max(producto.precio)) as Item;


console.log(mayorPrecio.nombre);