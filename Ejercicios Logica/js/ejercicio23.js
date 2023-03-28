/*
 *Programa una función que dado un array de números devuelva un objeto
 *con 2 arreglos en el primero almacena los números pares y en el segundo
 *los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá
 *{pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */
const arrayParesImpares = (arr = undefined) => {
  if (arr === undefined) return document.write("No ingresaste el arr");

  if (!arr instanceof Array)
    return document.write("El contenido ingresado NO pertenece a un Array");

  if (arr.length === 0) return document.write("Arreglo vacío");

  for (let num of arr) {
    if (typeof num != "number")
      return document.write(`El valor ${num} NO es de tipo numérico`);
  }

  return document.write(
    `Pares: ${arr.filter((num) => num % 2 === 0)} Impares: ${arr.filter(
      (num) => num % 2 === 1
    )}`
  );
};

arrayParesImpares([1, 2, 3, 4, 5, 6]);
