/* Genera números aleatorios del 1 al 10 y súmalos hasta superar 100. Usa while. */
let aleatorio: number ;
let sumaAleatorio: number = 0;

while(sumaAleatorio<100){
  aleatorio = Math.floor(Math.random()*10 + 1);
  console.log(aleatorio);
  sumaAleatorio+=aleatorio;
}