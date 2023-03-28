/*
 *Programa una función que dado un arr devuelva el número mas alto
 *y el más bajo de dicho arr, pe. miFuncion([1, 4, 5, 99, -60])
 *devolverá [99, -60].
 */
const arrayAltoBajo = (arr = undefined) => {
  if (arr === undefined) return document.write("No ingresaste el arr");

  if (!arr instanceof Array)
    return document.write("El contenido ingresado NO pertenece a un Array");

  if (arr.length === 0) return document.write("Arreglo vacío");

  for (let num of arr) {
    if (typeof num != "number")
      return document.write(`El valor ${num} NO es de tipo numérico`);
  }

  return document.write(
    `Array original: [${arr}]     Valor mayor: ${Math.max(
      ...arr
    )}      Valor menor: ${Math.min(...arr)}`
  );
};

arrayAltoBajo([1, 3, -1, 900, 11]);
