/*
 * Programa una función que te devuelva el texto recortado
 * según el número de caracteres indicados, pe.
 * miFuncion("Hola Mundo", 4) devolverá "Hola".
 */
const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? document.write("No ingresaste texto\n")
    : longitud === undefined
    ? document.write("NO ingresaste la longitud a cortar")
    : document.write(`${cadena.slice(0, longitud)}`);

recortarTexto("Perra HP", 4);
