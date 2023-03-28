/*
 *Programa una función que dado un arreglo de números obtenga el promedio,
 *pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */
const promedioArray = (arr = undefined) => {
  if (arr === undefined) return document.write("No ingresaste el arr");

  if (!arr instanceof Array)
    return document.write("El contenido ingresado NO pertenece a un Array");

  if (arr.length === 0) return document.write("Arreglo vacío");

  for (let num of arr) {
    if (typeof num != "number")
      return document.write(`El valor ${num} NO es de tipo numérico`);
  }

  return document.write(
    `${arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es: ${total / arr.length}`;
      } else {
        return total;
      }
    })}`
  );
};

promedioArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
