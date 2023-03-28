/*
 *Programa una función que devuelva el monto final después de
 *aplicar un descuento a una cantidad dada,
 *pe. miFuncion(1000, 20) devolverá 800.
 */
const montoFinal = (monto = undefined, descuento = undefined) => {
  if (monto === undefined || descuento === undefined)
    return document.write("No ingresaste el monto o el descuento");
  if (typeof monto !== "number" || typeof descuento !== "number")
    return document.write("Los datos ingresados son incorrectos");

  return document.write(`Monto final: ${monto - (monto * descuento) / 100}`);
};

montoFinal(1000, 20);
