/* Usa includes y indexOf para saber si una heroe está en la lista. */

let heroes: string[] = ["Batman", "Superman", "Flash"];

function estaEnLaLista(lista: string[],heroe: string): string{
  if(lista.includes(heroe)){
    return `el ${heroe} si esta en la lista`;
  }else{
    return `el ${heroe} no esta en la lista`;
  }
}

console.log(estaEnLaLista(heroes,"Flash"));

function cualEsSuPosicion(lista: string[],heroe: string): string{
  let posicion: number = lista.indexOf(heroe);
  if(posicion === -1){
    return `el ${heroe} no existe en la lista`;
  }else{
    return `el ${heroe} esta en la posicion ${lista.indexOf(heroe) + 1} de la lista`;
  }
}

console.log(cualEsSuPosicion(heroes, "Flash"));
