/*
 *Programa una función que calcule el factorial de un número
 *(El factorial de un entero positivo n, se define como el
 *producto de todos los números enteros positivos desde 1 hasta n),
 *pe. miFuncion(5) devolverá 120.
 */

const factorial = (numero = undefined) => {
  if (numero === undefined)
    return document.write("NO ingresaste ningún número");
  if (typeof numero !== "number")
    return document.write("Debes ingresar un número");
  if (numero === 0)
    return document.write("NO es posible sacar el factorial de 0");
  if (Math.sign(numero) === -1)
    return document.write("El número NO puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return document.write(`El factorial del número ${numero} es ${factorial}`);
};

factorial(5);
