/*
 *Programa una función que invierta las palabras de una cadena
 *de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */
const invertirCadena = (cadena = "") =>
  !cadena
    ? document.write("NO ingresaste una cadena de texto")
    : document.write(cadena.split("").reverse().join(""));

invertirCadena("Uribe paraco HP");
