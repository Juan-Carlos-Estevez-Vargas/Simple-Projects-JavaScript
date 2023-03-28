/*
    Dado un entero positivo num, devuelve la suma de todos los números impares 
    de Fibonacci que son menores o iguales a num.

    Los dos primeros números en la secuencia de Fibonacci son 1 y 1. Cada 
    número adicional en la secuencia es la suma de los dos números anteriores. 
    Los seis primeros números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.

    Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de 
    Fibonacci menores o iguales a 10 son 1, 1, 3 y 5
*/
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
