/*
 *Programa una función que dada una String te devuelva un
 *Array de textos separados por cierto caracter, pe.
 *miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */
const cadenaArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? document.write("No ingresaste texto\n")
    : separador === undefined
    ? document.write("No ingresaste el caracter separador")
    : document.write(cadena.split(separador));

cadenaArreglo("lorem ipsum dolor xd", " ");
