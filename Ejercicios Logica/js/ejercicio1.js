/*
 * Programa una función que cuente el número de caracteres de una cadena de
 * texto, pe. miFuncion("Hola Mundo") devolverá 10.
 */
const contarCaracteres = (cadena = "") =>
  !cadena
    ? document.write("NO ingresaste ninguna cadena")
    : document.write(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

contarCaracteres("\nPedro baila solo");
