/*
    Un número primo es un número entero mayor que 1 con sólo dos divisores: 
    1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible
    entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

    Reescribe sumPrimes para que devuelva la suma de todos los números primos que 
    sean menores o iguales a num.
*/
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

sumPrimes(10);
