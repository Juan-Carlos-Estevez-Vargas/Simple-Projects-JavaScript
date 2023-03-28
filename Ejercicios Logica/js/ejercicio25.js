/*
 *Programa una función que dado un arreglo de elementos, elimine los duplicados,
 *pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
 *devolverá ["x", 10, 2, "10", true].
 */
const arrayDuplicados = (arr = undefined) => {
  if (arr === undefined) return document.write("No ingresaste el arr");

  if (!arr instanceof Array)
    return document.write("El contenido ingresado NO pertenece a un Array");

  if (arr.length === 0) return document.write("Arreglo vacío");

  return document.write(
    `Arreglo original: ${arr}  ||  Arreglo sin duplicados: ${arr.filter(
      (value, index, self) => self.indexOf(value) === index
    )}`
  );
};

arrayDuplicados([1, 1, "x", 7, true, "x", true, false]);
