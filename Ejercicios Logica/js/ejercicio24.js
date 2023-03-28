/*
 *Programa una función que dado un arreglo de números devuelva un objeto
 *con dos arreglos, el primero tendrá los numeros ordenados en forma
 *ascendente y el segundo de forma descendiente,
 *pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */
const arrayAscDesc = (arr = undefined) => {
  if (arr === undefined) return document.write("No ingresaste el arr");

  if (!arr instanceof Array)
    return document.write("El contenido ingresado NO pertenece a un Array");

  if (arr.length === 0) return document.write("Arreglo vacío");

  for (let num of arr) {
    if (typeof num != "number")
      return document.write(`El valor ${num} NO es de tipo numérico`);
  }

  return document.write(
    `Array original: ${arr}  ||  Array Ascendente: ${arr.sort()}  ||  Array Descendente: ${arr
      .sort()
      .reverse()
      .join()}`
  );
};

arrayAscDesc([3, 2, 5, 1, 4]);
