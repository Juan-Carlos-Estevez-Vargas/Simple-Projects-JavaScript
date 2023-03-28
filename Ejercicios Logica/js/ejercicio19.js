/*
 *Programa una función que valide que un texto sea un nombre válido,
 *pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */
const validarNombre = (nombre = "") => {
  if (nombre === "") return document.write("NO ingresaste ninguna cadena");
  if (typeof nombre !== "string")
    return document.write(
      "El dato ingresado NO pertenece a una cadena de texto"
    );

  let expresion_regular = /^[A-Za-zÑñ+ÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

  return expresion_regular
    ? document.write(`${nombre} es un nombre válido`)
    : document.write(`${nombre} NO es un nombre válido`);
};

validarNombre("Juan Estévez");
