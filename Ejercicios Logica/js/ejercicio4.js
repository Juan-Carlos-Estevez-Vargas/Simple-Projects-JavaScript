/*
 *Programa una función que repita un texto X veces, pe.
 *miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola
 *Mundo Hola Mundo.
 */
const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return document.write("No ingresaste texto");

  if (veces === undefined)
    return document.write(
      "No ingresaste el número de veces a repetir el texto"
    );

  if (veces === 0) return document.write("El número de veces NO puede ser 0");

  if (Math.sign(veces) === -1)
    return document.write("El número de veces NO puede ser negativo");

  for (let i = 1; i <= veces; i++) document.write(`${texto}`);
};

repetirTexto("Hola mundo", 3);
