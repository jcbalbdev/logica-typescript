/* Usa includes y indexOf para saber si una heroe está en la lista. */

let heroes: string[] = ["Batman", "Superman", "Flash"];

function estaEnLaLista(lista: string[],heroe: string){
  if(lista.includes(heroe)){
    return `el ${heroe} si esta en la lista`;
  }else{
    return `el ${heroe} no esta en la lista`;
  }
}
