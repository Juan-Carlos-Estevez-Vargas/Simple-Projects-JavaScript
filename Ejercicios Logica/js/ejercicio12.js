/*
 *Programa una función que determine si un número es primo
 *(aquel que solo es divisible por sí mismo y 1) o no,
 *pe. miFuncion(7) devolverá true.
 */
const primo = (numero = undefined) => {
  if (numero === undefined)
    return document.write("NO ingresaste ningún número");
  if (typeof numero !== "number")
    return document.write("Debes ingresar un número");
  if (numero === 0)
    return document.write("NO es posible sacar el factorial de 0");
  if (Math.sign(numero) === -1)
    return document.write("El número NO puede ser negativo");
  if (numero === 1) return document.write("El número NO puede ser 1");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? document.write(`El número ${numero} NO es primo`)
    : document.write(`El número ${numero} es primo`);
};

primo(7);
