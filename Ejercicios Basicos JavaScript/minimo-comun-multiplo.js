/*
    Encuentra el múltiplo común más pequeño de los parámetros proporcionados que 
    pueden dividirse equitativamente por ambos, así como por todos los números 
    consecutivos del rango entre estos parámetros.

    El rango será un arreglo de dos números que no necesariamente estarán en orden 
    numérico.

    Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 
    que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.
*/
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);
