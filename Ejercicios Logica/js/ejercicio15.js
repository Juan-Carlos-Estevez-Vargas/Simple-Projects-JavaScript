/*
 *Programa una función para convertir números de base binaria
 *a decimal y viceversa, pe. miFuncion(100,2) devolverá
 *4 base 10.
 */
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined || base === undefined)
    return document.write("NO ingresaste algún dato");
  if (typeof numero !== "number" || typeof base !== "number")
    return document.write("Tipo de dato incorrecto");

  if (base === 2) {
    return document.write(
      `El número ${numero} base ${base} es equivalente ${parseInt(
        numero,
        base
      )} base 10`
    );
  } else if (base === 10) {
    return document.write(
      `El número ${numero} base ${base} es equivalente ${numero.toString(
        2
      )} base 2`
    );
  } else {
    return document.write("Tipo de base INCORRECTA");
  }
};

convertirBinarioDecimal(10001, 2);
