/*
 *Programa una función que dado un array numérico devuelve otro array con
 *los números elevados al cuadrado,
 *pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */
const arrayAlCuadrado = (array = undefined) => {
  if (array === undefined) return document.write("No ingresaste el array");
  if (!array instanceof Array)
    return document.write("El contenido ingresado NO pertenece a un Array");

  let array2 = [];

  for (let i in array) {
    array2[i] = array[i] * array[i];
  }

  return document.write(array2);
};

arrayAlCuadrado([1, 2, 3]);
