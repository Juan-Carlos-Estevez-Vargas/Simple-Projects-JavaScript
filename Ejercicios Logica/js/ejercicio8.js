/*
 *Programa una función que elimine cierto patrón de caracteres de un
 *texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
 *devolverá "1, 2, 3, 4 y 5
 */
const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.log("NO ingresaste ningún texto")
    : !patron
    ? console.warn("NO ingresaste ningún patrón a eliminar")
    : document.write(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");
