/*
    Se proporcionará un arreglo inicial (el primer argumento en la función destroyer),
    seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial 
    que tengan el mismo valor que estos argumentos.

    Nota: Tienes que utilizar el objeto arguments.
*/
function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
