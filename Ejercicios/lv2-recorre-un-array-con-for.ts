/* Recorre un array de nombres y muestra cada uno en consola. */
enum Nombre{
  Bruce = "bruce",
  Barry = "barry",
  Clark = "clark"
}

let alumnos: Nombre[] = [Nombre.Barry,Nombre.Bruce,Nombre.Clark];

for(let i: number = 0;i<alumnos.length;i++){
  console.log(alumnos[i]);
}
