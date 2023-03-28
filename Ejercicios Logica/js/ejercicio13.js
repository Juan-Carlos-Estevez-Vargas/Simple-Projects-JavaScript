/*
 *Programa una función que determine si un número es par o impar,
 *pe. miFuncion(29) devolverá Impar
 */
const parImpar = (numero = undefined) => {
  if (numero === undefined)
    return document.write("NO ingresaste ningún número");
  if (typeof numero !== "number")
    return document.write("Debes ingresar un número");
  return numero % 2 === 0
    ? document.write(`El número ${numero} es par`)
    : document.write(`El número ${numero} es impar`);
};

parImpar(20);
